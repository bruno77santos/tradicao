// src/app/components/BrandsSection.tsx
import Image from 'next/image';

const BrandsSection = () => {
  const brands = [
    // --- CORREÇÃO APLICADA AQUI ---
    // Garanta que todos os caminhos comecem com uma barra "/"
    { name: 'Sayerlack', logoUrl: 'sayerlack.jpg' },
    { name: 'Makita', logoUrl: '/makita.png' },
    { name: 'Rometal', logoUrl: '/rometal.png' },
    { name: 'Alternativa', logoUrl: '/alternativa.png' }, // Corrigido
    { name: 'Hafele', logoUrl: '/hafele.png' },
    { name: 'FGVTN Brasil', logoUrl: '/FGVTN.png' },
    { name: 'Indasa', logoUrl: '/indasa.png' },
    { name: 'HD Ferragens', logoUrl: '/hd.png' },
  ];

  // O código defensivo que adicionamos antes continua sendo útil.
  const validBrands = brands.filter(brand => brand.logoUrl && brand.logoUrl.startsWith('/'));
  
  const extendedBrands = validBrands.length > 0 ? [...validBrands, ...validBrands] : [];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          As melhores marcas do mercado estão aqui
        </h2>
        
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

          {extendedBrands.length > 0 && (
            <div className="flex animate-scroll">
              {extendedBrands.map((brand, index) => (
                <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center" style={{ width: '160px' }}>
                  <Image
                    src={brand.logoUrl}
                    alt={brand.name}
                    width={150}
                    height={40}
                    className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
