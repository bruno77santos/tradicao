// src/app/components/Footer.tsx

// 1. Importamos os componentes 'Link' e 'Image' do Next.js
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const linkSections = [
    {
      title: 'Institucional',
      links: [
        { name: 'Sobre a Tradição', href: '/sobre' },
        { name: 'Nossas Lojas', href: '/lojas' },
        { name: 'Trabalhe Conosco', href: '/carreiras' },
        { name: 'Política de Privacidade', href: '/privacidade' },
      ],
    },
    {
      title: 'Atendimento',
      links: [
        { name: 'Fale Conosco', href: '/contato' },
        { name: 'Perguntas Frequentes', href: '/faq' },
        { name: 'Como Comprar', href: '/como-comprar' },
        { name: 'Política de Entregas', href: '/entregas' },
      ],
    },
  ];

  return (
    <footer className="bg-[#1a2b48] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Coluna do Logo e Redes Sociais */}
          <div className="lg:col-span-4">
            {/* 2. A tag <a> foi substituída por <Link> */}
            <Link href="/" className="inline-block mb-6">
              {/* 3. A tag <img> foi substituída por <Image> */}
              <Image
                src="/logo-horizontal1.png" // Supondo que você tenha uma versão branca do logo
                alt="Logo Tradição"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 max-w-xs mb-6">
              Tudo para marceneiros, arquitetos e designers desde 1996.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Youtube size={24} /></a>
            </div>
          </div>

          {/* Colunas de Links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {linkSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {/* Usamos Link para navegação interna */}
                      <Link href={link.href} className="text-sm text-gray-400 hover:text-white hover:underline">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Você pode adicionar mais uma coluna de links ou informações aqui se desejar */}
          </div>
        </div>
      </div>

      {/* Barra de Copyright */}
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tradição. Todos os direitos reservados.</p>
          <p>
  Desenvolvido por{' '}
  <a 
    href="https://caulfieldco.com.br" // <-- Coloque o URL do seu site aqui
    target="_blank" 
    rel="noopener noreferrer"
    className="font-semibold text-gray-400 hover:text-white transition-colors"
  >
    Caulfield Code
  </a>
</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
