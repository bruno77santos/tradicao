//src/app/components/TestimonialsSection.tsx

import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Renata',
      role: 'Arquiteta',
      content: 'Meu pai sempre dizia que time que está ganhando não se mexe. Cliente da Tradição há mais de 17 anos e sempre com excelente atendimento e com tudo que precisamos para nossa empresa.',
      avatar: '👩‍💼'
    },
    {
      id: 2,
      name: 'Bruno Cesar',
      role: 'Empresário',
      content: 'Tenho uma Marcenaria e nem faço pesquisa de nada. Vou direto no Whatsapp da Tradição e peço tudo que preciso com total Segurança.',
      avatar: '👨‍💼'
    },
    {
      id: 3,
      name: 'Ana Cláudia',
      role: 'Designer',
      content: 'Trabalho com marceneiros, carpinteiros e só indico a Tradição. Eles tem o melhor atendimento e preços competitivos, sempre encontro o que preciso para meus projetos.',
      avatar: '👩‍🎨'
    }
  ];

  return (
    <section id="clientes" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que dizem nossos Clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-blue-600" />
              </div>

              {/* Avatar */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                  <p className="text-blue-600 font-medium uppercase text-sm tracking-wide">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </blockquote>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
                29+
              </div>
              <div className="text-blue-100 font-medium">Anos de Experiência</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
                1000+
              </div>
              <div className="text-blue-100 font-medium">Clientes Satisfeitos</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-blue-100 font-medium">Qualidade Garantida</div>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nosso Canal de Atendimento por WhatsApp
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Material para Marcenaria, Carpintaria, Designer de Interiores e Arquitetos. Fale com nossos vendedores pelo WhatsApp e peça seu Material que entregamos no seu endereço.
            </p>
            <a
              href="https://wa.me/5521977300379"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-block"
            >
              Fale Agora com o Vendedor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;