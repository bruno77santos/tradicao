// src/app/components/BrandsSection.tsx

const BrandsSection = () => {
  // Lista de fornecedores. Adicione ou remova conforme necessário.
  // Certifique-se que os logos estejam na pasta /public/brands/
  const brands = [
    { name: 'Sayerlack', logoUrl: '/sayerlack.jpg' },
    { name: 'Makita', logoUrl: '/makita.png' },
    { name: 'Rometal', logoUrl: 'rometal.png' },
    { name: 'Alternativa', logoUrl: 'alternativa.png' },
    { name: 'Hafele', logoUrl: '/hafele.png' },
    { name: 'FGVTN Brasil', logoUrl: '/FGVTN.png' },
    { name: 'Indasa', logoUrl: '/indasa.png' },
    { name: 'HD Ferragens', logoUrl: '/hd.png' },
    // Adicione mais marcas aqui
  ];

  // Duplicamos a lista para criar o efeito de loop infinito contínuo
  const extendedBrands = [...brands, ...brands];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          As melhores marcas do mercado estão aqui
        </h2>
        
        <div className="relative w-full overflow-hidden">
          {/* Máscara com gradiente nas laterais para um efeito de fade suave */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex animate-scroll">
            {extendedBrands.map((brand, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center" style={{ width: '160px' }}>
                <img
                  src={brand.logoUrl}
                  alt={brand.name}
                  // Efeito de grayscale que some no hover
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
