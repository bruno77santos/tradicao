import type { Product } from '@prisma/client';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  if (!product) return null;

  // Formata o preço para o padrão BRL (R$)
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.preco);

  return (
    // A estrutura HTML e de classes é baseada no seu código.
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {/* Container da imagem */}
      <a href={product.url} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full h-56 bg-white overflow-hidden">
          {/* Usamos 'object-cover' para preencher o espaço e evitar as barras cinzas */}
          <img
            src={product.imageUrl ?? ''} // Usamos a imagem do nosso banco
            alt={product.nome}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </a>

      {/* Container do conteúdo */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Título */}
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 flex-grow" style={{ minHeight: '40px' }}>
          {product.nome}
        </h3>

        {/* Preço */}
        <p className="text-lg font-bold text-gray-900 mb-2">
          {formattedPrice}
        </p>

        {/* Informações de quantidade/estoque */}
        <p className="text-xs text-gray-600 mb-3">
          {product.estoque > 0 ? (
            <>
              <span className="font-semibold text-green-600">{product.estoque}</span> em estoque
            </>
          ) : (
            <span className="text-red-600 font-semibold">Indisponível</span>
          )}
        </p>

        {/* Botão para visualizar no Mercado Livre */}
        <a
          href={product.url} // Usamos a URL do nosso banco
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 text-center block text-sm mt-auto"
        >
          Ver no Mercado Livre
        </a>
      </div>
    </div>
  );
}
