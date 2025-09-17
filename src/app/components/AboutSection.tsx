//src/app/components/AboutSection.tsx
import { Target, Users, Eye, Heart } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Fornecer ao ramo da marcenaria sempre os melhores produtos e lançamentos do mercado, buscando novas tendências e facilitando a funcionalidade, produção e o design do móvel.'
    },
    {
      icon: Users,
      title: 'Mercado',
      description: 'Trabalhamos com tintas, vernizes, adesivos, laminados nacionais e importados, ferragens, ferramentas, máquinas e acessórios, entregando em toda a região do Grande Rio de Janeiro e outras cidades.'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência de mercado, mantendo nossos princípios e abrindo a empresa para novas possibilidades de futuro, sempre buscando inovações e expansão.'
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Respeito e dedicação aos clientes e fornecedores, Excelência, segurança, integridade e qualidade nos produtos e serviços.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossa Empresa</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </div>

        {/* Company Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <img
                src="/logo.png"
                alt="Logo Tradição"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A Tradição <strong>LOJA DE MATERIAL PARA MARCENARIA</strong>, fundada em 1996, pelo imigrante Português Antônio Neves, visava fornecer produtos e ferramentas para o setor moveleiro. Hoje trabalha com tinta para móveis de madeira, verniz polisten, sayerlac verniz, adesivos, laminados nacionais e importados, ferragens, ferramentas, máquinas e acessórios, entregando em toda a região do Grande Rio de Janeiro e outras cidades.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Atualmente é gerida por sua CEO Adriana Pizzini, administradora por formação e filha do Sr. Neves.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                  <IconComponent className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Commitment Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Nosso Compromisso
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  A Tradição, <strong>LOJA DE MATERIAL PARA MARCENARIA</strong>, tem como filosofia de trabalho a satisfação de seus clientes procurando garantir qualidade dos produtos, preços competitivos e um ótimo atendimento, além de praticar uma política empresarial séria, comprometida com seus colaboradores e consciente, reinvestindo os resultados na própria <strong>Empresa</strong>, buscando crescimento sustentável continuado e assumindo um compromisso com o meio ambiente e com a sociedade.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Estamos sempre em busca do desenvolvimento profissional de nossos clientes, na valorização das pessoas, no crescimento de nosso negócio e no respeito ao meio ambiente e à sociedade. Nossa visão e valores refletem nosso compromisso com o desenvolvimento sustentável.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">29+</div>
                    <div className="text-orange-700 font-semibold">Anos de</div>
                    <div className="text-orange-700 font-semibold">Experiência</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;