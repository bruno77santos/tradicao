// src/app/components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, User, ShoppingCart, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Ativa o efeito sticky após rolar 50px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topNavLinks = [
    { name: 'Grupo Tradição', href: '/sobre' },
    { name: 'Soluções Financeiras', href: '/financeiro' },
    { name: 'Segurança e Privacidade', href: '/privacidade' },
  ];

  const categoryLinks = [
    { name: 'Painéis e MDF', href: '/produtos/paineis' },
    { name: 'Ferragens', href: '/produtos/ferragens' },
    { name: 'Ferramentas', href: '/produtos/ferramentas' },
    { name: 'Tintas e Acabamentos', href: '/produtos/acabamentos' },
    { name: 'Pisos e Revestimentos', href: '/produtos/pisos' },
    { name: 'Promoções', href: '/promocoes', highlight: true },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full bg-white z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* --- NÍVEL 1: BARRA SUPERIOR --- */}
      <div className="hidden md:block bg-gray-100 border-b border-gray-200 text-xs text-gray-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-8">
          <nav className="flex gap-6">
            {topNavLinks.map(link => (
              <a key={link.name} href={link.href} className="hover:text-[#2b76c3] transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex gap-6">
            <a href="/atendimento" className="hover:text-[#2b76c3] transition-colors">Atendimento</a>
            <a href="/meus-pedidos" className="hover:text-[#2b76c3] transition-colors">Meus pedidos</a>
          </div>
        </div>
      </div>

      {/* --- NÍVEL 2: BARRA PRINCIPAL (LOGO, BUSCA, AÇÕES) --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src="/logo.png" alt="Logo Tradição" className="h-12 w-auto" />
          </a>

          {/* Barra de Busca (Desktop) */}
          <div className="hidden md:flex flex-grow max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="O que você está procurando?"
                className="w-full h-12 pl-5 pr-14 rounded-full border-2 border-gray-200 focus:border-[#2b76c3] focus:ring-2 focus:ring-[#2b76c3]/50 outline-none transition-all"
              />
              <button className="absolute right-0 top-0 h-full w-14 flex items-center justify-center text-white bg-[#2b76c3] rounded-r-full hover:bg-opacity-90">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Ações do Usuário (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/lojas" className="flex items-center gap-2 text-gray-700 hover:text-[#2b76c3] transition-colors">
              <MapPin size={24} />
              <div>
                <p className="text-xs">Nossas</p>
                <p className="font-semibold text-sm">Lojas</p>
              </div>
            </a>
            <a href="/conta" className="flex items-center gap-2 text-gray-700 hover:text-[#2b76c3] transition-colors">
              <User size={24} />
              <div>
                <p className="text-xs">Minha</p>
                <p className="font-semibold text-sm">Conta</p>
              </div>
            </a>
            <a href="/carrinho" className="relative flex items-center gap-2 text-gray-700 hover:text-[#2b76c3] transition-colors">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-[#921b30] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </a>
          </div>

          {/* Botão de Menu Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- NÍVEL 3: BARRA DE CATEGORIAS (Desktop) --- */}
      <nav className="hidden md:block bg-[#2b76c3] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-12">
          <ul className="flex gap-8">
            {categoryLinks.map(link => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={`font-semibold tracking-wide uppercase text-sm transition-colors ${link.highlight ? 'bg-[#fece2c] text-black px-4 py-1.5 rounded-full hover:bg-opacity-90' : 'hover:text-[#fece2c]'}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* --- MENU MOBILE --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4">
          {/* Barra de Busca Mobile */}
          <div className="relative w-full mb-4">
            <input type="text" placeholder="O que você procura?" className="w-full h-10 pl-4 pr-12 rounded-full border border-gray-300" />
            <button className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-gray-500"><Search size={20} /></button>
          </div>
          {/* Links Mobile */}
          <nav className="flex flex-col gap-4">
            {categoryLinks.map(link => (
              <a key={link.name} href={link.href} className="font-semibold text-gray-800 hover:text-[#2b76c3]">
                {link.name}
              </a>
            ))}
            <hr/>
            <a href="/lojas" className="font-semibold text-gray-800 hover:text-[#2b76c3]">Nossas Lojas</a>
            <a href="/conta" className="font-semibold text-gray-800 hover:text-[#2b76c3]">Minha Conta</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
