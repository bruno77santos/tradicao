// src/app/components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      } z-50`} // <-- A CORREÇÃO ESTÁ AQUI (z-50)
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo Tradição" className="h-10 w-auto" />
            <span className="font-bold text-2xl text-gray-800 tracking-wider">TRADIÇÃO</span>
          </a>

          {/* Navegação para Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 font-medium hover:text-[#2b76c3] transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2b76c3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </a>
            ))}
          </nav>

          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/5521977300379"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center bg-[#921b30] text-white px-5 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all"
          >
            <MessageCircle size={20} className="mr-2" />
            WhatsApp
          </a>
          
          {/* Menu Mobile (Ícone ) - Adicionar lógica de abertura se necessário */}
          <div className="md:hidden">
            <button className="text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
   );
};

export default Header;
