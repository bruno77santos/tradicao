// src/app/components/AboutSection.tsx

import { Target, Users, Eye, Heart } from 'lucide-react';

const AboutSection = () => {
  const values = [
    { icon: Target, title: 'Missão', description: 'Fornecer ao ramo da marcenaria sempre os melhores produtos e lançamentos do mercado, buscando novas tendências e facilitando a funcionalidade, produção e o design do móvel.' },
    { icon: Users, title: 'Mercado', description: 'Trabalhamos com tintas, vernizes, adesivos, laminados, ferragens, ferramentas, máquinas e acessórios, entregando em toda a região do Grande Rio de Janeiro e outras cidades.' },
    { icon: Eye, title: 'Visão', description: 'Ser referência de mercado, mantendo nossos princípios e abrindo a empresa para novas possibilidades de futuro, sempre buscando inovações e expansão.' },
    { icon: Heart, title: 'Valores', description: 'Respeito e dedicação aos clientes e fornecedores, Excelência, segurança, integridade e qualidade nos produtos e serviços.' }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossa Empresa</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#2b76c3] to-[#921b30] mx-auto mb-8"></div>
        </div>

        {/* História da Empresa */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-[#f2f2f2] rounded-2xl p-8 md:p-12 border border-gray-200">
            <div className="flex items-center justify-center mb-6">
              <img src="/logo.png" alt="Logo Tradição" className="w-16 h-16 object-contain" />
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A Tradição <strong>LOJA DE MATERIAL PARA MARCENARIA</strong>, fundada em 1996 pelo imigrante Português Antônio Neves, visava fornecer produtos e ferramentas para o setor moveleiro. Hoje trabalha com tinta para móveis de madeira, verniz, adesivos, laminados, ferragens, ferramentas, máquinas e acessórios.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Atualmente é gerida por sua CEO Adriana Pizzini, administradora por formação e filha do Sr. Neves.
              </p>
            </div>
          </div>
        </div>

        {/* Grid de Valores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            const colors = ['#2b76c3', '#921b30', '#3d52a6', '#fece2c'];
            return (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-xl transition-shadow duration-300 border-2" style={{ borderColor: colors[index % 4] }}>
                  <IconComponent style={{ color: colors[index % 4] }} size={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Seção de Compromisso */}
        <div className="bg-gradient-to-r from-[#2b76c3] to-[#3d52a6] rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Nosso Compromisso
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-blue-50">
                <p className="leading-relaxed">
                  A Tradição tem como filosofia a satisfação de seus clientes, garantindo qualidade, preços competitivos e ótimo atendimento. Praticamos uma política empresarial séria, comprometida com colaboradores e consciente, reinvestindo os resultados na própria empresa para um crescimento sustentável.
                </p>
                <p className="leading-relaxed">
                  Buscamos o desenvolvimento profissional de nossos clientes, a valorização das pessoas e o respeito ao meio ambiente e à sociedade.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-60 h-60 bg-[#fece2c] rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#921b30] mb-2">29+</div>
                    <div className="text-[#921b30] font-semibold">Anos de</div>
                    <div className="text-[#921b30] font-semibold">Experiência</div>
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
