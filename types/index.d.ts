import type { Image, PortableTextBlock } from "sanity";

export interface Category {
  _type: "category";
  _id: string;
  title: string;
  slug: string;
}

export interface Product {
  _id: string;
  title: string;
  slug: string;
  price: number;
  description?: PortableTextBlock[];
  highlightInHome?: boolean;
  seo?: Seo;
  gallery?: Gallery;
  _key: string;
  _type: "product";
  category: Category[];
}

interface ImageType {
  src: string;
  alt: string;
  order: number;
  principal?: boolean;
  base64?: string;
}

export interface Seo {
  description?: PortableTextBlock[];
  image?: Image;
  title?: string;
}
