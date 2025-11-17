'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { Product } from '@prisma/client';
import ProductCard from './ProductCard';
import './embla.css';

// 1. CORREÇÃO: Reescrever PrevButton como um componente React válido.
// Ele agora recebe as props e retorna um elemento <button>.
const PrevButton: React.FC<{ enabled: boolean; onClick: () => void }> = (props) => {
  const { enabled, onClick } = props;
  return (
    <button className="embla__button embla__button__prev" onClick={onClick} disabled={!enabled}>
      <svg className="embla__button__svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
      </svg>
    </button>
  );
};

// 2. CORREÇÃO: Reescrever NextButton como um componente React válido.
const NextButton: React.FC<{ enabled: boolean; onClick: () => void }> = (props) => {
  const { enabled, onClick } = props;
  return (
    <button className="embla__button embla__button__next" onClick={onClick} disabled={!enabled}>
      <svg className="embla__button__svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"></path>
      </svg>
    </button>
  );
};

export default function ProductCarousel({ products }: { products: Product[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // O restante do componente permanece o mesmo.
  if (!products || products.length === 0) return null;

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {products.map((product) => (
            <div className="embla__slide p-2" key={product.id.toString()}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      
      {/* 3. A chamada aos componentes agora está correta, pois eles são componentes válidos. */}
      <PrevButton onClick={scrollPrev} enabled={true} />
      <NextButton onClick={scrollNext} enabled={true} />
    </div>
  );
}
