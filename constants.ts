import { Category, Product } from "./types";

export const CATEGORIES: Category[] = [
  { id: 0, name: "Todas", slug: "" },
  { id: 1, name: "Diarios", slug: "diarios" },
  { id: 2, name: "Kits", slug: "kits" },
  { id: 3, name: "Accesorios", slug: "accesorios" },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Diario de pareja",
    slug: "diario-de-pareja",
    price: 100000,
    highlight: true,
    mainImage: "/products/pareja-crema-3.png",
    category: CATEGORIES[1],
    images: [
      {
        alt: "Diario de pareja",
        order: 0,
        src: "/products/pareja-crema-3.png",
        principal: true,
      },
      {
        alt: "Diario de gratitud",
        order: 1,
        src: "/products/gratitud-verde-5.png",
      },
      {
        alt: "Kit plenitud",
        order: 2,
        src: "/products/kit-plenitud.png",
      },
      {
        alt: "Diario de gratitud",
        order: 3,
        src: "/products/gratitud-verde-5.png",
      },
      {
        alt: "Diario de lectura",
        order: 4,
        src: "/products/lectura-azul-13.png",
      },
      {
        alt: "Diario de lectura",
        order: 5,
        src: "/products/lectura-azul-13.png",
      },
    ],
  },
  {
    id: 2,
    name: "Diario de lectura",
    slug: "diario-de-lectura",
    price: 100000,
    highlight: true,
    mainImage: "/products/lectura-azul-13.png",
    category: CATEGORIES[1],
    images: [
      {
        alt: "Diario de lectura",
        order: 0,
        src: "/products/lectura-azul-13.png",
      },
    ],
  },
  {
    id: 3,
    name: "Diario de gratitud",
    slug: "diario-de-gratitud",
    price: 100000,
    highlight: true,
    mainImage: "/products/gratitud-verde-5.png",
    category: CATEGORIES[1],
    images: [
      {
        alt: "Diario de gratitud",
        order: 0,
        src: "/products/gratitud-verde-5.png",
      },
    ],
  },
  {
    id: 4,
    name: "Kit plenitud",
    slug: "kit-plenitud",
    price: 100000,
    highlight: true,
    mainImage: "/products/kit-plenitud.png",
    category: CATEGORIES[2],
    images: [
      {
        alt: "Kit plenitud",
        order: 0,
        src: "/products/kit-plenitud.png",
      },
    ],
  },
];
