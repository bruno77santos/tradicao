//src/app/components/Footer.tsx

import { Facebook, Youtube, Instagram, Linkedin, MapPin, Phone, Clock, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Endereço */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Endereços</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Av. Expedicionário José Amaro, 1431</p>
                  <p>Vila São Luiz</p>
                  <p>Duque de Caxias - Rio de Janeiro - RJ</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-gray-400" />
                <span className="text-gray-300 text-sm">+55 21 97730.0379</span>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Home
              </a>
              <a href="#sobre" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Sobre
              </a>
              <a href="#produtos" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Produtos
              </a>
              <a href="#contato" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Horários */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horários de Funcionamento</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock size={18} className="text-gray-400" />
                <div className="text-gray-300 text-sm">
                  <p>2ª à 5ª feira: 8h às 17:30h</p>
                  <p>Sexta: 8h às 17:00h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Shield size={20} className="text-green-500" />
              <span className="text-sm text-gray-300">Garantia e segurança</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                Tradição Feedback Máquinas e Ferragens Ltda - Since 1996
              </p>
              <p className="text-sm text-gray-400">
                CNPJ: 01.193.105/0001-77
              </p>
            </div>
            <div className="text-sm text-gray-400">
              <p>Desenvolvido por AMD Marketing Digital Ltda</p>
            </div>
          </div>

          {/* LGPD */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              De acordo com a LGPD, seus dados estão protegidos e serão usados apenas como canal de informação sobre nossos produtos e serviços.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;