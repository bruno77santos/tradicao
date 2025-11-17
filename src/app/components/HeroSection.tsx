// src/app/components/HeroSection.tsx

import { MessageCircle, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f2f2f2] isolate"
    >
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-[#fece2c] rounded-full opacity-20 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#2b76c3] rounded-full opacity-20 -z-10"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-[#921b30] rounded-full opacity-20 -z-10"></div>

      {/* Container Principal que ocupa a largura total */}
      <div className="container mx-auto px-6 lg:px-8 z-10">
        
        {/* --- A MÁGICA ACONTECE AQUI: GRID DE 12 COLUNAS --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Coluna da Esquerda: Logo (Ocupando 5 de 12 colunas) */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <img
              src="/logo.png"
              alt="Logo Tradição"
              // Tamanho generoso para a logo, como solicitado
              className="w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain"
            />
          </div>

          {/* Coluna da Direita: Conteúdo (Ocupando 7 de 12 colunas) */}
          <div className="md:col-span-7 text-center md:text-left">
            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
              Tudo para{' '}
              <span className="text-[#2b76c3]">Marceneiros</span>,{' '}
              <span className="text-[#3d52a6]">Arquitetos</span>{' '}
              e{' '}
              <span className="text-[#921b30]">Designers</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-xl text-gray-700 mb-10">
              Produtos de qualidade para o setor moveleiro desde 1996.
            </p>

            {/* Imagem do Selo Sayerlack */}
            <div className="mb-10 flex justify-center md:justify-start">
              <img
                src="/sayerlack-distribuidor.png"
                alt="Distribuidor Autorizado Sayerlack"
                className="max-w-xs md:max-w-sm object-contain"
              />
            </div>

            {/* Botão CTA */}
            <a
              href="https://wa.me/5521977300379"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#921b30] hover:bg-opacity-90 text-white px-8 py-4 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="mr-3" size={24} />
              Fale Agora com o Vendedor
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <ArrowDown size={32} />
      </div>
    </section>
   );
};

export default HeroSection;
