import Header from '@/app/components/Header';
import HeroSection from '@/app/components/HeroSection';
import BrandsSection from '@/app/components/BrandsSection';
import IconCategorySection from '@/app/components/IconCategorySection'; 
//import TestimonialsSection from '@/app/components/TestimonialsSection';
//import ContactSection from '@/app/components/ContactSection';
import Footer from '@/app/components/Footer';
import { PrismaClient } from '@prisma/client';
import ProductCarousel from '@/app/components/ProductCarousel';
import AboutSection from '@/app/components/AboutSection';


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
      <IconCategorySection />
      <BrandsSection />

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
          
          {showcaseProducts.length > 0 && (
        <ProductCarousel 
          products={showcaseProducts}
          title="Nossa Vitrine de Produtos"
          subtitle="Uma seleção especial de nossos melhores itens para você."
        />
      )}
        </div>
      </section>
            <AboutSection /> 

      {/* <TestimonialsSection />*/}
{/*       <ContactSection />*/}
      <Footer />
    </main>
  );
}
