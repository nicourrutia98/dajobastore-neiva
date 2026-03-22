export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  gallery: string[];
  rating: number;
  stockLabel: string;
  description: string;
  specs: string[];
  featured?: boolean;
  badge?: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  content: string[];
};

export type ContactInfo = {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  hours: string;
  mapEmbedUrl: string;
  instagram: string;
  facebook: string;
};

export type UserProfile = {
  email: string;
  fullName: string;
  city: string;
};

export type MockOrder = {
  id: string;
  createdAt: string;
  status: string;
  total: number;
};
