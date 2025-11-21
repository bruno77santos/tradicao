// src/app/components/AboutSection.tsx
import { Target, Users, Eye, Heart } from 'lucide-react';

const AboutSection = () => {

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- SEÇÃO PRINCIPAL: HISTÓRIA E COMPROMISSO --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da Esquerda: Imagem */}
          <div className="relative w-full aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
            <img src="/aboutSection.jpg" alt="Fachada da loja Tradição" className="w-full h-full object-cover" />
            
            <div className="absolute bottom-6 right-6 bg-[#fece2c] text-[#1a2b48] p-6 rounded-xl shadow-2xl">
              <div className="text-5xl font-bold">29+</div>
              <div className="font-semibold leading-tight">Anos de  
Experiência</div>
            </div>
          </div>

          {/* Coluna da Direita: Texto */}
          <div className="text-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Tradição que move o seu projeto desde 1996
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Fundada pelo imigrante português Antônio Neves, a Tradição nasceu com o objetivo de fornecer os melhores produtos e ferramentas para o setor moveleiro. Hoje, sob a gestão de sua filha e CEO Adriana Pizzini, continuamos a honrar esse legado.
              </p>
              <p>
                Nossa filosofia é a satisfação total de nossos clientes, garantindo produtos de qualidade, preços competitivos e um atendimento que entende suas necessidades. Reinvestimos constantemente na empresa, buscando um crescimento sustentável e um compromisso sério com nossos colaboradores, a sociedade e o meio ambiente.
              </p>
            </div>
          </div>
        </div>

        {/* --- SEÇÃO DE VALORES (REMOVIDA) --- */}
        {/* O código que estava aqui, referente ao título "Nossos Pilares" e ao grid de valores, foi completamente removido. */}
        
      </div>
    </section>
  );
};

export default AboutSection;