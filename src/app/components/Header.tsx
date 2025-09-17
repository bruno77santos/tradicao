//src/app/components/Header.tsx

'use client';
import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { cn } from '@/libs/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Logo Tradição"
              className="w-10 h-10 object-contain rounded-full"
            />
            <span className="text-xl lg:text-2xl font-bold text-gray-900">TRADIÇÃO</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Home
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Sobre
            </a>
            <a href="#produtos" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Produtos
            </a>
            <a href="#clientes" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Clientes
            </a>
            <a href="#contato" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Contato
            </a>
          </nav>

          {/* WhatsApp Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/5521977300379"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors"
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Home
              </a>
              <a href="#sobre" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Sobre
              </a>
              <a href="#produtos" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Produtos
              </a>
              <a href="#clientes" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Clientes
              </a>
              <a href="#contato" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;