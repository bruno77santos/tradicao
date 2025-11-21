// src/app/components/IconCategorySection.tsx
import { DoorOpen, Wrench, PaintBucket, Puzzle, Lamp, Grip } from 'lucide-react';
import React from 'react';

// Definindo a interface para cada categoria
interface Category {
  name: string;
  href: string;
  icon: React.ElementType; // Usamos React.ElementType para passar o componente do ícone
}

const IconCategorySection = () => {
  // Lista de categorias. Você pode personalizar os ícones, nomes e links.
  const categories: Category[] = [
    { name: 'Puxadores', href: '/produtos/puxadores', icon: Grip },
    { name: 'Ferragens', href: '/produtos/ferragens', icon: Puzzle },
    { name: 'Ferramentas', href: '/produtos/ferramentas', icon: Wrench },
    { name: 'Acabamentos', href: '/produtos/acabamentos', icon: PaintBucket },
    { name: 'Iluminação', href: '/produtos/iluminacao', icon: Lamp },
    { name: 'Portas e Perfis', href: '/produtos/portas', icon: DoorOpen },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-10">
          Navegue por Categorias
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <a
                key={category.name}
                href={category.href}
                // O 'group' é essencial para o efeito de hover nos elementos filhos
                className="group flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 mb-4 rounded-full bg-gray-100 group-hover:bg-white border-2 border-transparent group-hover:border-[#2b76c3] transition-all duration-300">
                  <IconComponent 
                    className="w-10 h-10 md:w-12 md:h-12 text-gray-600 group-hover:text-[#2b76c3] transition-colors duration-300" 
                    strokeWidth={1.5} 
                  />
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-[#2b76c3] transition-colors duration-300">
                  {category.name}
                </h3>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IconCategorySection;
