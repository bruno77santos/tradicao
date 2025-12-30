import React from 'react';

const StoresSection = () => {
  const stores = [
    {
      name: 'Duque de Caxias',
      address: 'Av. Expedicionário José Amaro, 1431',
      subAddress: 'Vila São Luís - Duque de Caxias / RJ',
      image: '/duquedeCaxias.jpeg'
    },
    {
      name: 'Campo Grande',
      address: 'Estrada do Monteiro, 468 - loja B',
      subAddress: 'Campo Grande - Rio de Janeiro / RJ',
      image: '/campoGrande.jpeg'
    },
    {
      name: 'Teresópolis',
      address: 'Rua Ten. Luiz Meirelles 1895 - loja 03',
      subAddress: 'Bom Retiro - Teresópolis / RJ',
      image: '/teresopolis.jpeg'
    }
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stores.map((store) => (
            <div key={store.name} className="flex flex-col">
              {/* Container da Imagem */}
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={store.image}
                  alt={`Loja Tradição ${store.name}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card de Endereço */}
              <div className="bg-[#1E7DBE] text-white p-6 text-center flex flex-col justify-center min-h-[140px]">
                <h3 className="text-xl font-bold underline decoration-2 underline-offset-4 mb-2">
                  {store.name}
                </h3>
                <p className="text-sm leading-tight">
                  {store.address}
                </p>
                <p className="text-sm leading-tight">
                  {store.subAddress}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoresSection;
