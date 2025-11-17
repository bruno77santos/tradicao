import Header from '@/app/components/Header';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/app/components/Footer';
import ProductsSection from '@/app/components/ProductsSection';

import { PrismaClient } from '@prisma/client';
import ProductCarousel from '@/app/components/ProductCarousel';


const prisma = new PrismaClient();


// A Home também usará ISR para ser super rápida!
export const revalidate = 3600; // Revalida a cada hora


export default async function Home() {
  // Busca INSTANTÂNEA no banco de dados
  const showcaseProducts = await prisma.product.findMany({
    take: 12, // Pega 12 produtos
    orderBy: {
      updatedAt: 'desc', // Pega os atualizados mais recentemente
    },
  });


  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />      

      {/* Nova Seção de Vitrine de Produtos */}
      <section id="vitrine-produtos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Vitrine de Produtos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Uma seleção especial de nossos melhores itens para você.
            </p>
          </div>
          
          {/* Usamos o componente de carrossel com os produtos da vitrine */}
          <ProductCarousel products={showcaseProducts} />
          
          <div className="text-center mt-12">
            {/* O botão agora leva para a nossa página interna de produtos */}
            <a
              href="/produtos"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-lg transition-colors"
            >
              Ver Todos os Produtos
            </a>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
