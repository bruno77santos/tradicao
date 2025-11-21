// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Adicione esta configuração de imagens
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**', // Permite qualquer caminho dentro deste hostname
      },
      // Você pode adicionar outros domínios aqui no futuro, se precisar
      // Exemplo:
      // {
      //   protocol: 'https',
      //   hostname: 'outro-dominio.com',
      // },
    ],
  },
};

module.exports = nextConfig;
