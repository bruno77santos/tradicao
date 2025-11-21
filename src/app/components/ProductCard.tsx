// src/app/components/ProductCard.tsx
import Image from 'next/image';
import { ExternalLink } from 'lucide-react'; // Ícone para indicar link externo

// A interface agora precisa incluir os campos 'url' e 'estoque' do seu Prisma schema
interface Product {
  id: number | bigint;
  nome: string;
  preco: number;
  imageUrl: string | null;
  url: string; // URL do Mercado Livre
  estoque: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  if (!product) return null;

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="group relative flex flex-col h-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Container da imagem, agora aponta para a URL do ML */}
      <a href={product.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            src={product.imageUrl || '/placeholder-image.png'}
            alt={product.nome}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </a>
      
      <div className="flex-1 flex flex-col p-4">
        {/* Título do produto */}
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 flex-grow" style={{ minHeight: '40px' }}>
          <a href={product.url} target="_blank" rel="noopener noreferrer">
            {product.nome}
          </a>
        </h3>
        
        <div className="mt-2">
          {/* Preço */}
          <p className="text-lg font-bold text-gray-900">{formatPrice(product.preco)}</p>
          
          {/* Informação de Estoque */}
          <p className="text-xs text-gray-600 mt-1">
            {product.estoque > 0 ? (
              <>
                <span className="font-semibold text-green-600">{product.estoque}</span> em estoque
              </>
            ) : (
              <span className="text-red-600 font-semibold">Indisponível</span>
            )}
          </p>
        </div>
      </div>

      {/* Botão para o Mercado Livre */}
      <div className="p-4 pt-0 mt-auto">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center bg-[#2b76c3] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
        >
          <ExternalLink size={16} className="mr-2" />
          Ver no Mercado Livre
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
