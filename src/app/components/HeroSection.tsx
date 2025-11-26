// src/app/components/HeroSection.tsx
'use client';

import React from 'react'; // <-- CORRIGIDO AQUI
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

// --- Hook customizado para detectar o tamanho da tela ---
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};


// --- Componentes de Botão (sem alterações) ---
const PrevButton = (props: React.ComponentProps<'button'>) => (
  <button
    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md border border-gray-300 transition-all z-10"
    {...props}
  >
    <ArrowLeft size={20} />
  </button>
);

const NextButton = (props: React.ComponentProps<'button'>) => (
  <button
    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md border border-gray-300 transition-all z-10"
    {...props}
  >
    <ArrowRight size={20} />
  </button>
);


const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [headerHeight, setHeaderHeight] = React.useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)'); // Detecta se a tela é mobile (até 768px)

  // --- Efeito para calcular a altura do Header dinamicamente ---
  React.useEffect(() => {
    const headerElement = document.querySelector('header'); // Encontra o elemento <header> na página
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }
  }, []); // Roda apenas uma vez após a montagem do componente

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  // --- ESTRUTURA DE DADOS ATUALIZADA ---
  // Agora temos uma imagem para desktop e outra para mobile
  const banners = [
    { 
      imageUrlDesktop: "/banner-1-desktop.jpeg", 
      imageUrlMobile: "/banner-1-mobile.jpeg", // Crie e adicione a imagem mobile aqui
      link: "/produtos", 
      alt: "Banner principal Sayerlack" 
    },
    // Adicione outros banners aqui com o mesmo formato
  ];

  return (
    // A seção agora usa o padding-top dinâmico calculado via JavaScript
    <section className="bg-gray-100 pb-10" style={{ paddingTop: `${headerHeight}px` }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="overflow-hidden rounded-xl shadow-lg" ref={emblaRef}>
          <div className="flex">
            {banners.map((banner, index) => (
              <div className="flex-[0_0_100%]" key={index}>
                <a
                  href={banner.link}
                  target={banner.link.startsWith('http' ) ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  // A altura agora é definida por uma proporção (aspect-ratio)
                  // Isso é mais flexível que alturas fixas
className="block relative w-full aspect-[20/9] md:aspect-[25/9]"
                >
                  <Image
                    // Escolhe a URL da imagem com base no tamanho da tela
                    src={isMobile ? banner.imageUrlMobile : banner.imageUrlDesktop}
                    alt={banner.alt}
                    fill
                    className="object-cover"
                    priority={index === 0} // Otimiza o carregamento do primeiro banner
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <PrevButton onClick={scrollPrev} />
        <NextButton onClick={scrollNext} />
      </div>
    </section>
  );
};

export default HeroSection;
