// src/app/components/ProductCarousel.tsx
'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ProductCard from './ProductCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// --- CORREÇÃO AQUI ---
// A interface agora inclui 'url' e 'estoque' para ser compatível com o ProductCard
interface Product {
  id: number | bigint;
  nome: string;
  preco: number;
  imageUrl: string | null;
  url: string;      // Adicionado
  estoque: number;  // Adicionado
}

interface ProductCarouselProps {
  products: Product[];
  title: string;
  subtitle?: string;
}

const ProductCarousel = ({ products, title, subtitle }: ProductCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>
            {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
          </div>
          <div className="hidden sm:flex gap-2">
            <button onClick={scrollPrev} className="bg-white border rounded-full p-2 shadow-sm hover:bg-gray-100 transition-colors"><ArrowLeft /></button>
            <button onClick={scrollNext} className="bg-white border rounded-full p-2 shadow-sm hover:bg-gray-100 transition-colors"><ArrowRight /></button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {products.map((product) => (
              <div key={String(product.id)} className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pl-4">
                {/* Agora não haverá mais erro aqui */}
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
