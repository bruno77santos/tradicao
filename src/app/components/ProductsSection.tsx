//src/app/components/ProductsSection.tsx

import { Package, Wrench, Palette, Cog } from 'lucide-react';

const ProductsSection = () => {
  const brands = [
    { name: 'FGVTN Brasil', description: 'Ferragens para móveis' },
    { name: 'Starrett', description: 'Ferramentas de precisão' },
    { name: 'Alternativa', description: 'Soluções para marcenaria' },
    { name: 'Sayerlack', description: 'Tintas e vernizes' }
  ];

  const productCategories = [
    {
      icon: Palette,
      title: 'SAYERLACK',
      items: [
        'Sayerlac verniz, verniz polisten',
        'Sayersysten, verniz a base d\'água',
        'Primer branco FL6269, tinta branca FL06516',
        'Seladora PU FL6298, verniz fosco PU FO206717',
        'Seladora nitro NL9245, Poliulack eco acetinado YO1371100',
        'Lâminas ALPI, Sayerlack diluentes DN4242 / DN4290 / DR4403 / DF4068',
        'Tintas para móveis de madeira, verniz para móveis'
      ]
    },
    {
      icon: Wrench,
      title: 'FGVTN',
      items: [
        'Trilhos telescópicos invisível (30/35/40/45/50/55)',
        'Dobradiça 45°, dobradiça 165° c/ amortecedor',
        'Push open (toque soft embutir)',
        'Bandejas para talheres, prato giratório',
        'Cabideiro extensível, porta panos triplo',
        'Articuladores, quadro QPS 1000 para pasta suspensa'
      ]
    },
    {
      icon: Package,
      title: 'CISER',
      items: [
        'Parafusos especializados',
        'Fixações para móveis',
        'Acessórios de montagem'
      ]
    },
    {
      icon: Cog,
      title: 'ROMETAL',
      items: [
        'Ferragens especiais',
        'Componentes metálicos',
        'Soluções personalizadas'
      ]
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Variedade e Comodidade para Você
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Trabalhamos com as melhores marcas do mercado para oferecer produtos de qualidade superior
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
        </div>

        {/* Brands Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Trabalhamos com as melhores marcas do mercado
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-blue-600 font-bold text-lg">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{brand.name}</h4>
                <p className="text-sm text-gray-600">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {productCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start space-x-3 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Precisa de algum produto específico?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Entre em contato conosco e encontraremos a solução ideal para seu projeto
            </p>
            <a
              href="https://wa.me/5521977300379"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
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