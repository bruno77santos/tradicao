// src/app/components/ProductsSection.tsx

import { Package, Wrench, Palette, Cog } from 'lucide-react';

const ProductsSection = () => {
  const brands = [
    { name: 'Sayerlack', description: 'Tintas e vernizes', logoUrl: '/Sayerlack.jpg' },
    { name: 'Makita', description: 'Ferramentas elétricas', logoUrl: '/makita.png' },
    { name: 'Rometal', description: 'Sistemas deslizantes', logoUrl: '/rometal.png' },
    { name: 'Alternativa', description: 'Soluções para marcenaria', logoUrl: '/alternativa.png' },
    { name: 'Hafele', description: 'Ferragens e acessórios', logoUrl: '/hafele.png' },
    { name: 'FGVTN Brasil', description: 'Ferragens para móveis', logoUrl: '/FGVTN.png' },
    { name: 'Indasa', description: 'Abrasivos e lixas', logoUrl: '/indasa.png' },
    { name: 'HD Ferragens', description: 'Ferragens e acessórios', logoUrl: '/hd.png' }
  ];

  return (
    <section id="produtos" className="py-20 bg-[#f2f2f2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Principais Fornecedores
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Trabalhamos com as melhores marcas do mercado para oferecer produtos de qualidade superior.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#fece2c] to-[#921b30] mx-auto"></div>
        </div>

        {/* Seção de Marcas */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Marcas que confiam em nosso trabalho
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group border border-gray-200"
              >
                <div className="h-20 flex items-center justify-center mx-auto mb-4">
                  <img 
                    src={brand.logoUrl} 
                    alt={brand.name} 
                    className="max-h-full max-w-full object-contain" 
                  />
                </div>
                <h4 className="font-bold text-gray-800 text-lg mb-1">{brand.name}</h4>
                <p className="text-sm text-gray-600">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Seção CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#2b76c3] to-[#3d52a6] rounded-2xl p-10 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Precisa de algum produto específico?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-xl mx-auto">
              Entre em contato conosco e encontraremos a solução ideal para seu projeto.
            </p>
            <a
              href="https://wa.me/5521977300379"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fece2c] text-[#921b30] px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors inline-block text-lg shadow-md"
            >
              Fale Conosco Agora
            </a>
          </div>
        </div>
      </div>
    </section>
   );
};

export default ProductsSection;
