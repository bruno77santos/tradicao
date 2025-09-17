//src/app/components/HeroSection.tsx

import { MessageCircle, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo + Title */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <img
              src="/logo.png"
              alt="Logo Tradição"
              className="w-20 h-20 object-contain rounded-full shadow-lg"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">TRADIÇÃO</h1>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Tudo para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Marceneiros
            </span>{' '}
            ,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Arquitetos
            </span>{' '}
            e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Designers
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Distribuidor autorizado Sayerlack no Rio de Janeiro. Produtos de qualidade para o setor moveleiro desde 1996.
          </p>

          {/* Sayerlack Badge */}
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg mb-8">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mr-3">
              DISTRIBUIDOR AUTORIZADO
            </div>
            <span className="text-blue-600 font-bold text-lg">SAYERLACK</span>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/5521977300379"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <MessageCircle className="mr-3" size={24} />
            Fale Agora com o Vendedor pelo WhatsApp
          </a>

          {/* Scroll Indicator */}
          <div className="animate-bounce text-gray-400 mt-8">
            <ArrowDown size={32} />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;