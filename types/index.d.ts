export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  highlight: boolean;
  mainImage: string;
  category: Category;
  base64?: string;
  images: Image[];
  // variants
}

interface ImageType {
  src: string;
  alt: string;
  order: number;
  principal?: boolean;
  base64?: string;
}
