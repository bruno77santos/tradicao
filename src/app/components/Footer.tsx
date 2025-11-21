// src/app/components/Footer.tsx
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const institutionalLinks = [
    { name: 'Sobre a Tradição', href: '/sobre' },
    { name: 'Nossas Lojas', href: '/lojas' },
    { name: 'Trabalhe Conosco', href: '/carreiras' },
  ];

  const supportLinks = [
    { name: 'Dúvidas Frequentes', href: '/faq' },
    { name: 'Fale Conosco', href: '/contato' },
    { name: 'Política de Entrega', href: '/politica-entrega' },
    { name: 'Política de Trocas', href: '/politica-trocas' },
  ];

  const catalogLinks = [
    { name: 'Painéis e MDF', href: '/produtos/paineis' },
    { name: 'Ferragens', href: '/produtos/ferragens' },
    { name: 'Ferramentas', href: '/produtos/ferramentas' },
    { name: 'Tintas e Acabamentos', href: '/produtos/acabamentos' },
    { name: 'Adesivos', href: '/produtos/adesivos' },
  ];

  return (
    <footer className="bg-[#1a2b48] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Seção Superior: Colunas de Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Coluna 1: Logo e Redes Sociais */}
          <div className="col-span-2 lg:col-span-1">
            <a href="/">
              <img src="/logo.png" alt="Logo Tradição" className="h-12 w-auto mb-6" />
            </a>
            <p className="text-sm text-gray-300 mb-6">
              Desde 1996, a parceria certa para o seu projeto.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-[#fece2c] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-[#fece2c] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-300 hover:text-[#fece2c] transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Institucional */}
          <div>
            <h3 className="font-bold text-lg mb-4">Institucional</h3>
            <ul className="space-y-3">
              {institutionalLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Atendimento */}
          <div>
            <h3 className="font-bold text-lg mb-4">Atendimento</h3>
            <ul className="space-y-3">
              {supportLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Catálogo */}
          <div>
            <h3 className="font-bold text-lg mb-4">Catálogo</h3>
            <ul className="space-y-3">
              {catalogLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 5: Contato */}
          <div className="col-span-2 md:col-span-1">
             <h3 className="font-bold text-lg mb-4">Contato</h3>
             <div className="text-gray-300 space-y-3">
                <p><strong>Endereço:</strong>  
Av. Expedicionário José Amaro, 1431  
Vila São Luiz, Duque de Caxias - RJ</p>
                <p><strong>WhatsApp:</strong>  
(21) 97730-0379</p>
                <p><strong>Email:</strong>  
contato@tradicao.com.br</p>
             </div>
          </div>
        </div>

        {/* Seção Inferior: Direitos Autorais e Pagamento */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 text-center md:text-left mb-4 md:mb-0">
            Tradição Comércio de Materiais para Marcenaria LTDA. © {new Date().getFullYear()}. Todos os direitos reservados.
          </p>
          {/* Aqui você pode adicionar imagens das formas de pagamento */}
          <div className="flex items-center gap-4">
            {/* Exemplo: <img src="/visa.png" alt="Visa" className="h-6" /> */}
            <p className="text-sm text-gray-400">Formas de Pagamento</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
