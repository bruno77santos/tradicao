//src/types/index.ts

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

