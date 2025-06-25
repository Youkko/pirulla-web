import { Video } from '@/interfaces'
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

const cache: { [key: string]: { data: Video[]; timestamp: number; duration: number } } = {};

// Função para gerar um número aleatório entre dois valores
function getRandomCacheDuration(minMinutes: number, maxMinutes: number): number {
  const minMs = minMinutes * 60 * 1000;
  const maxMs = maxMinutes * 60 * 1000;
  return Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
}

async function scrapeVideos(url: string): Promise<Video[]> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Scroll repetido para carregar os vídeos
  await page.evaluate(async () => {
    for (let i = 0; i < 10; i++) {
      window.scrollBy(0, window.innerHeight);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  });

  // Extrai os dados dos vídeos
  const videos = await page.evaluate(() => {
    const videoElements = document.querySelectorAll(
      'div#contents.ytd-rich-grid-renderer ytd-rich-item-renderer'
    );
    const result: Video[] = [];

    videoElements.forEach((video) => {
      const badge = video.querySelector('.badge.badge-style-type-members-only');
      if (badge) {
        const linkElement = video.querySelector('a#video-title-link') as HTMLAnchorElement;
        const thumbnailImg = video.querySelector('ytd-thumbnail img, yt-img-shadow img') as HTMLImageElement;
        const durationElement = video.querySelector(
          'ytd-thumbnail-overlay-time-status-renderer span'
        );

        result.push({
          title: video.querySelector('#video-title')?.textContent?.trim() || 'Unknown Title',
          link: linkElement?.href || '',
          thumbnail: thumbnailImg?.src || '',
          duration: durationElement?.textContent?.trim() || 'Unknown',
        });
      }
    });

    return result.slice(0, 6); // Retorna apenas os 6 primeiros
  });

  await browser.close();
  return videos;
}

export async function GET() {
  const cacheKey = 'youtube-pirulla-streams';
  const now = Date.now();

  // Verifica cache e validade
  if (
    cache[cacheKey] &&
    now - cache[cacheKey].timestamp < cache[cacheKey].duration
  ) {
    return NextResponse.json({ videos: cache[cacheKey].data });
  }

  try {
    const url = 'https://www.youtube.com/@Pirulla25/streams';
    const videos = await scrapeVideos(url);

    // Gera um novo intervalo aleatório entre 60 e 120 minutos
    const newCacheDuration = getRandomCacheDuration(60, 120);

    // Atualiza o cache
    cache[cacheKey] = { data: videos, timestamp: now, duration: newCacheDuration };

    return NextResponse.json({ videos });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
