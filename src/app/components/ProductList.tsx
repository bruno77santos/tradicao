'use client';

import React, { useState, useEffect } from 'react';
import { MercadoLivreProduct } from '@/types';
import { ProductCard } from './ProductCard';

/**
 * Componente ProductList: Gerencia a busca, o estado de carregamento e a exibição dos produtos.
 * 
 * Funcionalidades:
 * - Busca os produtos da rota de API (/api/products)
 * - Gerencia estados de carregamento e erro
 * - Exibe os produtos em um grid responsivo
 * - Mostra mensagens apropriadas para cada estado
 */
export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<MercadoLivreProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Erro ao buscar produtos: ${response.statusText}`);
        }

        const data = await response.json();

        if (!data.products || data.products.length === 0) {
          setError('Nenhum produto encontrado para este vendedor.');
        } else {
          setProducts(data.products);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido ao buscar produtos.';
        setError(errorMessage);
        console.error('Erro ao buscar produtos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Estado de carregamento
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
          <p className="mt-4 text-gray-600">Carregando produtos...</p>
        </div>
      </div>
    );
  }

  // Estado de erro
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-red-700">
        <p className="font-semibold text-lg">Erro ao carregar produtos</p>
        <p className="text-sm mt-2">{error}</p>
      </div>
    );
  }

  // Estado vazio (sem produtos)
  if (products.length === 0) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-yellow-700">
        <p className="font-semibold text-lg">Nenhum produto disponível</p>
        <p className="text-sm mt-2">Não encontramos produtos para exibir no momento.</p>
      </div>
    );
  }

  // Renderiza a lista de produtos
  return (
    <div className="w-full">
      {/* Cabeçalho da seção */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Nossos Produtos no Mercado Livre
        </h2>
        <p className="text-gray-600 mt-2">
          {products.length} produto{products.length !== 1 ? 's' : ''} disponível{products.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Grid de produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
