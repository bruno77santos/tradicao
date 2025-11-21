// src/app/components/ProductGrid.tsx
'use client'; // Mantemos 'use client' pois ProductCard pode ter interatividade

import ProductCard from './ProductCard';

// A interface agora corresponde exatamente ao seu schema
interface Product {
  id: number | bigint;
  nome: string;
  preco: number;
  imageUrl: string | null;
  url: string;
  estoque: number;
}

interface ProductGridProps {
  products: Product[];
}

// Este componente agora apenas renderiza o grid de produtos
export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <main className="w-full">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={String(product.id)} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-gray-600">Nenhum produto encontrado.</p>
        </div>
      )}
    </main>
  );
}
