// src/app/components/HeroSection.tsx
'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image'; // O import já deve estar no topo do arquivo


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

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const banners = [
    { imageUrl: "/banner.png", link: "/produtos", alt: "Banner principal" },
    { imageUrl: "/frete-1.png", link: "https://wa.me/5521977300379", alt: "Frete Rápido" },
  ];

  return (
    <section className="bg-gray-100 pt-[148px] md:pt-[140px] pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="overflow-hidden rounded-xl shadow-lg" ref={emblaRef}>
          <div className="flex">
            {banners.map((banner, index) => (
              <div className="flex-[0_0_100%]" key={index}>
                <a
                  href={banner.link}
                  target={banner.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="block h-64 sm:h-80 md:h-96 lg:h-[500px]"
                >
                  <Image
  src={banner.imageUrl}
  alt={banner.alt}
  fill // 'fill' faz a imagem preencher o container pai
  className="object-cover" // 'object-cover' continua funcionando com 'fill'
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