import React from 'react';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const ContactStores = () => {
  const stores = [
    {
      name: 'D. de Caxias',
      whatsapp: '5521964171724'
    },
    {
      name: 'C. Grande',
      whatsapp: '5521992195147'
    },
    {
      name: 'Teresópolis',
      whatsapp: '5521971842597'
    }
  ];

  return (
    <section className="w-full bg-[#1E7DBE] py-4 px-6 flex items-center justify-center text-white font-sans">
      {/* Conteúdo Centralizado */}
      <div className="flex items-center gap-4 md:gap-8">
        <h2 className="text-[#F9C306] font-black text-xl md:text-2xl tracking-tighter whitespace-nowrap">
          FALE CONOSCO
        </h2>
        
        <div className="h-8 w-[2px] bg-white/30 mx-2 hidden md:block" />

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {stores.map((store) => (
            <a
              key={store.name}
              href={`https://wa.me/${store.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group hover:opacity-80 transition-all"
            >
              <div className="bg-[#F9C306] p-1.5 rounded-full text-[#1E7DBE]">
                <Phone size={16} fill="currentColor" />
              </div>
              <span className="text-lg md:text-xl font-medium tracking-tight whitespace-nowrap">
                {store.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactStores;
