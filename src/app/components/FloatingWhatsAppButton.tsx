import React from 'react';

// Se você estiver usando o Lucide Icons, importe o ícone do WhatsApp
// import { LucideWhatsapp } from 'lucide-react'; 

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5521977300379"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
      aria-label="Fale conosco pelo WhatsApp"
    >
      {/* Ícone do WhatsApp (usando SVG para garantir que funcione sem a biblioteca Lucide ) */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp">
        <path d="M12 2a10 10 0 0 0-7.35 16.63l-1.2 3.8a.5.5 0 0 0 .62.62l3.8-1.2A10 10 0 0 0 12 2z" />
        <path d="M12 16.5c-1.5 0-3-.75-3-2.5s1.5-2.5 3-2.5 3 .75 3 2.5-1.5 2.5-3 2.5z" />
        <path d="M16 12c-.5-1.5-1.75-2.5-3.5-2.5-1.75 0-3 .5-3.5 2.5" />
      </svg>
    </a>
   );
};

export default FloatingWhatsAppButton;
