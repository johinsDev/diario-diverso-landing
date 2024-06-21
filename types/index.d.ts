import { PortableTextBlock } from "next-sanity";
import type { Image, ImageAsset } from "sanity";

export interface CustomImage {
  alt?: string;
  image?: Image & {
    asset: ImageAsset;
  };
}

export interface Category {
  _type: "category";
  _id: string;
  title: string;
  slug: string;
  description?: PortableTextBlock[];
  seo?: Seo;
}

type GalleryImage = CustomImage["image"] & {
  alt?: string;
};

export type GalleryDisplay = "stacked" | "inline" | "carousel";
export interface Gallery {
  images: GalleryImage[];
  display: GalleryDisplay;
  zoom: boolean;
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
  relatedProducts?: Product[];
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
