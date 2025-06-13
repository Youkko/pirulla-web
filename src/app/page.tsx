'use client';
import { useRef, RefObject, Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useSections } from '@/context';
import { useOnScreen } from '@/hooks/useOnScreen';
import { Props } from '@/interfaces';

// Carregamento dinâmico com lazy loading para cada componente
const componentMap = {
  ajuda: dynamic<Props>(() => import('@/components/Ajuda')),
  canal: dynamic<Props>(() => import('@/Components/Canal')),
  //galeria: dynamic<Props>(() => import('@/Components/Galeria')),
  //livros: dynamic<Props>(() => import('@/Components/Livros')),
  //contato: dynamic<Props>(() => import('@/Components/Contato')),
} as {
  [key: string]: React.ComponentType<Props>;
};

const SectionObserver = ({ section }: { section: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(
    ref as RefObject<Element>,
    '200px'
  );
  const Component = componentMap[section];
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (isVisible && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [isVisible, hasBeenVisible]);

  return (
    <section id={section} className="min-h-screen rootComponent">
      <div ref={ref} className="h-4" /> {/* Marcador invisível para observação */}
      
      {(isVisible || hasBeenVisible) && (
        <Suspense fallback={<div className="text-center">Carregando {section}...</div>}>
          <Component id={section} />
        </Suspense>
      )}
    </section>
  );
};

export default function Ajuda() {
  const { sections } = useSections();

  return (
    <div className="mx-auto px-4">
      {sections.map((section) => (
        <SectionObserver key={section} section={section} />
      ))}
    </div>
  );
}