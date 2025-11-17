// src/types/index.ts

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
}

export interface Brand {
  id: number;
  name: string;
  logo: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email?: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday?: string;
  };
}

/**
 * Interface para os produtos do Mercado Livre, conforme retornado pela nossa API.
 * Ela substitui a interface genérica `Product` para este contexto específico.
 */
export interface MercadoLivreProduct {
  id: string;
  title: string;
  price: number;
  currency: string;
  permalink: string;
  thumbnail: string;
  condition: string;
  available_quantity: number;
  sold_quantity: number;
}
