// src/app/components/HeroSection.tsx
'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

// --- Hook e Botões (sem alterações) ---
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState(false);
  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);
  return matches;
};

const PrevButton = (props: React.ComponentProps<'button'>) => (
  <button {...props} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md border border-gray-300 transition-all z-10"><ArrowLeft size={20} /></button>
);

const NextButton = (props: React.ComponentProps<'button'>) => (
  <button {...props} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md border border-gray-300 transition-all z-10"><ArrowRight size={20} /></button>
);


const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [headerHeight, setHeaderHeight] = React.useState(0);

  React.useEffect(() => {
    const headerElement = document.querySelector('header');
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }
  }, []);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const banners = [
    { 
      imageUrlDesktop: "/banner-1-desktop.jpeg", 
      imageUrlMobile: "/banner-1-mobile.jpeg",
      link: "/produtos", 
      alt: "Banner principal Sayerlack" 
    },
    // ... outros banners
  ];

  return (
    <section className="bg-gray-100 pb-10" style={{ paddingTop: `${headerHeight}px` }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="overflow-hidden rounded-xl shadow-lg" ref={emblaRef}>
          <div className="flex">
            {banners.map((banner, index) => (
              // --- MUDANÇA PRINCIPAL AQUI ---
              // O slide agora é mais simples e ocupa o espaço corretamente.
              <div className="flex-[0_0_100%] min-w-0 relative" key={index}>
                
                {/* O link agora é o container da imagem, e ele controla a proporção */}
                <a
                  href={banner.link}
                  target={banner.link.startsWith('http' ) ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  {/* Imagem Desktop: visível apenas em telas grandes */}
                  <div className="hidden md:block aspect-[26/9]"> {/* Controle a proporção do desktop aqui */}
                    <Image
                      src={banner.imageUrlDesktop}
                      alt={banner.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                  
                  {/* Imagem Mobile: visível apenas em telas pequenas */}
                  <div className="block md:hidden aspect-[13/9]"> {/* Controle a proporção do mobile aqui */}
                    <Image
                      src={banner.imageUrlMobile}
                      alt={banner.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
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
