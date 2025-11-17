import { PrismaClient } from '@prisma/client';
import Header from '@/app/components/Header'; // Supondo que você queira o header e footer
import Footer from '@/app/components/Footer';
import ProductGrid from '@/app/components/ProductGrid'; // Reutilizaremos o grid!

// Configuração do ISR: revalida a cada 3600 segundos (1 hora)
export const revalidate = 3600;

const prisma = new PrismaClient();


export default async function ProdutosPage() {
  // 3. SUBSTITUA a chamada da API do Bling pela consulta ao banco de dados.
  // Esta consulta é extremamente rápida.
  const products = await prisma.product.findMany({
    orderBy: {
      nome: 'asc', // Opcional: ordena os produtos por nome em ordem alfabética
    },
  });

  
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section id="todos-produtos" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nossos Produtos
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore nosso catálogo completo de produtos disponíveis.
              </p>
            </div>
            
            {/* O mesmo ProductGrid que já temos, agora exibindo todos os produtos */}
            <ProductGrid products={products} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
