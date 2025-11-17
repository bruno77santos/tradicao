'use client';

import { useState, useEffect } from 'react';

// Interface final com todos os campos
interface Product {
  id: number;
  nome: string;
  sku: string;
  mercadoLivreId: string;
  preco: number;
  estoque: number;
  url: string;
  imageUrl: string | null;
}

export default function ProdutosMercadoLivrePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/bling-products');
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Falha ao carregar produtos');
        }
        
        const { data } = await response.json();
        setProducts(data);

      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div style={styles.container}><p>Carregando produtos do Bling... (Isso pode levar um momento)</p></div>;
  }

  if (error) {
    return <div style={styles.container}><p style={styles.error}>Erro: {error}</p></div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Produtos Vinculados ao Mercado Livre</h1>
      <p style={styles.subtitle}>Lista de produtos importados do Bling com link para o anúncio.</p>
      
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{...styles.th, width: '80px'}}>Imagem</th>
            <th style={{...styles.th, textAlign: 'left'}}>Nome do Produto</th>
            <th style={styles.th}>SKU</th>
            <th style={styles.th}>ID Mercado Livre</th>
            <th style={styles.th}>Preço</th>
            <th style={styles.th}>Estoque</th>
            <th style={styles.th}>Link</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td style={styles.td}>
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.nome} style={styles.image} />
                  ) : (
                    <div style={styles.noImage}>Sem foto</div>
                  )}
                </td>
                <td style={{...styles.td, textAlign: 'left', fontWeight: 'bold'}}>{product.nome}</td>
                <td style={styles.td}>{product.sku}</td>
                <td style={styles.td}>{product.mercadoLivreId}</td>
                <td style={styles.td}>R$ {product.preco.toFixed(2)}</td>
                <td style={styles.td}>{product.estoque}</td>
                <td style={styles.td}>
                  <a 
                    href={product.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={styles.link}
                  >
                    Ver no ML
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} style={styles.td}>Nenhum produto encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

// Estilos atualizados
const styles: { [key: string]: React.CSSProperties } = {
  container: { fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '1400px', margin: '0 auto' },
  title: { fontSize: '2rem', marginBottom: '0.5rem' },
  subtitle: { color: '#666', marginTop: 0, marginBottom: '2rem' },
  error: { color: 'red' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '14px' },
  th: { background: '#f4f4f4', padding: '12px', border: '1px solid #ddd', textAlign: 'center', verticalAlign: 'middle' },
  td: { padding: '10px', border: '1px solid #ddd', verticalAlign: 'middle', textAlign: 'center' },
  link: { color: '#0070f3', textDecoration: 'none', fontWeight: 'bold' },
  image: { width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' },
  noImage: { width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0', color: '#aaa', fontSize: '12px', borderRadius: '4px' },
};
