// src/app/produtos/page.tsx
import { PrismaClient } from '@prisma/client';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ProductGrid from '@/app/components/ProductGrid'; // Importamos o componente correto

export const revalidate = 3600;
const prisma = new PrismaClient();

export default async function ProdutosPage() {
  // A busca de dados volta a ser simples, apenas para produtos.
  const products = await prisma.product.findMany({
    orderBy: { nome: 'asc' },
  });

  return (
    <div className="bg-white">
      <Header />
      <main className="min-h-screen pt-40 md:pt-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="py-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossos Produtos
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore nosso catálogo completo e encontre a solução ideal para o seu projeto.
            </p>
          </header>
          
          {/* Usamos o ProductGrid simples, passando apenas a lista de produtos */}
          <ProductGrid products={products} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
