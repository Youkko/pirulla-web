'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Video } from '@/interfaces';
import styles from "../Canal.module.css"

const MAX_RETRIES = 3; // Número máximo de tentativas
const RETRY_DELAY = 2000; // Delay entre tentativas (em milissegundos)

async function fetchVideosData(retryCount = 0): Promise<Video[]> {
  const response = await fetch('/api/scrape');

  if (!response.ok) {
    if (retryCount < MAX_RETRIES) {
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
      return fetchVideosData(retryCount + 1);
    }
    throw new Error(`Erro ${response.status}: ${response.statusText}`);
  }

  const data = await response.json();
  return data.videos || [];
}

export default function MembersVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchVideosData();
        setVideos(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Erro desconhecido ao carregar vídeos');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (videos.length === 0) {
    return <NoVideosMessage />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="animate-pulse bg-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-300 aspect-video"></div>
          <div className="p-3">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="bg-emerald-400 border border-amber-700 rounded-lg p-4 text-center">
      <h3 className="font-medium text-red-700">Erro ao carregar vídeos exclusivos para membros</h3>
      <p className="text-red-600 mt-1">{message}</p>
    </div>
  );
}

function NoVideosMessage() {
  return (
    <div className="bg-emerald-400 border border-amber-700 rounded-lg p-4 text-center">
      <h3 className="font-medium text-amber-700">Nenhum vídeo encontrado</h3>
      <p className="text-white mt-1">
        Não foram encontrados vídeos exclusivos para membros.
      </p>
    </div>
  );
}

function VideoCard({ video }: { video: Video }) {
  return (
    <a 
      href={video.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-emerald-950"
    >
      <div className="aspect-video relative bg-gray-100">
        <Image
          src={video.thumbnail || '/placeholder.jpg'}
          alt={video.title}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.jpg';
          }}
        />
      </div>
      <div className={`p-3 ${styles.rotuloCardExclusivos}`}>
        <div className={styles.rotuloCardExclusivosLinha}>
          <p className={styles.rotuloCardExclusivosTitulo}>{video.title}</p>
          <p className={styles.rotuloCardExclusivosTempo}>{video.duration}</p>
        </div>
        <div className={styles.rotuloCardExclusivosBadge}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path clipRule="evenodd" d="M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7Zm2.47 10.5L7.99 9.94 5.5 11.5l.67-2.97L4 6.5l2.87-.22L8.01 3.5l1.12 2.78L12 6.5 9.82 8.53l.65 2.97Z" fillRule="evenodd"></path></svg>
          Só para membros
        </div>
      </div>
    </a>
  );
}
