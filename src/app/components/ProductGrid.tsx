import type { Product } from '@prisma/client';
import ProductCard from './ProductCard'; // Importamos nosso novo componente

export default function ProductGrid({ products }: { products: Product[] }) {
  if (!products || products.length === 0) {
    return <p className="text-center text-gray-500">Nenhum produto encontrado.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        // Para cada produto, renderizamos um ProductCard
        <ProductCard key={product.id.toString()} product={product} />
      ))}
    </div>
  );
}
