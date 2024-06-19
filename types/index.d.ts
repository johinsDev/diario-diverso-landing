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
  // variants
}
