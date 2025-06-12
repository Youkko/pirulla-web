import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/Common/Navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context";
import { ThemeApplier } from "@/Common/ThemeApplier";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Canal do Pirulla',
  description: 'Paleontólogo, formado em biologia, mestre e doutor em zoologia, com ênfase em paleontologia. Em seu canal no YouTube, aborda temas nas áreas de ciências, meio ambiente, religião e política.',
  authors: [{ name: 'Mages.dev', url: 'mailto:contato@mages.dev' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Canal do Pirulla',
    description: 'Paleontólogo, formado em biologia, mestre e doutor em zoologia, com ênfase em paleontologia. Em seu canal no YouTube, aborda temas nas áreas de ciências, meio ambiente, religião e política.',
    url: 'https://pirulla.com.br/',
    siteName: 'Canal do Pirulla',
    images: [
      {
        url: 'https://pirulla.com.br/logo.png',
        width: 500,
        height: 500,
        alt: 'Canal do Pirulla',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <ThemeApplier />
          <header style={{ display: "flex", justifyContent: "flex-end" }}>
            <Navigation activeSection="home" />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}