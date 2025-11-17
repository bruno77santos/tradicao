// src/app/components/TestimonialsSection.tsx

import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    { id: 1, name: 'Renata', role: 'Arquiteta', content: 'Meu pai sempre dizia que time que está ganhando não se mexe. Cliente da Tradição há mais de 17 anos e sempre com excelente atendimento e com tudo que precisamos para nossa empresa.', avatar: '👩‍💼' },
    { id: 2, name: 'Bruno Cesar', role: 'Empresário', content: 'Tenho uma Marcenaria e nem faço pesquisa de nada. Vou direto no Whatsapp da Tradição e peço tudo que preciso com total Segurança.', avatar: '👨‍💼' },
    { id: 3, name: 'Ana Cláudia', role: 'Designer', content: 'Trabalho com marceneiros, carpinteiros e só indico a Tradição. Eles tem o melhor atendimento e preços competitivos, sempre encontro o que preciso para meus projetos.', avatar: '👩‍🎨' }
  ];

  return (
    <section id="clientes" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que dizem nossos Clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A satisfação dos nossos clientes é nossa maior conquista.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#2b76c3] to-[#921b30] mx-auto"></div>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#f2f2f2] rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden border border-gray-200"
            >
              <Quote size={60} className="absolute top-4 right-4 text-gray-300 opacity-50 group-hover:text-[#2b76c3] transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2b76c3] to-[#3d52a6] rounded-full flex items-center justify-center text-3xl mr-4 text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                    <p className="text-[#2b76c3] font-medium uppercase text-sm tracking-wide">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-[#fece2c]" fill="#fece2c" />
                  ))}
                </div>
                <blockquote className="text-gray-700 leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Estatísticas */}
        <div className="mt-20 bg-gradient-to-r from-[#fece2c] to-[#921b30] rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">29+</div>
              <div className="font-medium opacity-90">Anos de Experiência</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">1000+</div>
              <div className="font-medium opacity-90">Clientes Satisfeitos</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">100%</div>
              <div className="font-medium opacity-90">Qualidade Garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
