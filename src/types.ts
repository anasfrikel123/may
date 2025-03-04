export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'women' | 'men' | 'accessories';
  image: string;
  colors: string[];
  sizes: string[];
  featured?: boolean;
  new?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  featured?: boolean;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}