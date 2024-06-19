import { Category, Product } from "./types";

export const CATEGORIES: Category[] = [
  { id: 0, name: "Todos", slug: "" },
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
  },
  {
    id: 2,
    name: "Diario de lectura",
    slug: "diario-de-lectura",
    price: 100000,
    highlight: true,
    mainImage: "/products/lectura-azul-13.png",
    category: CATEGORIES[1],
  },
  {
    id: 3,
    name: "Diario de gratitud",
    slug: "diario-de-gratitud",
    price: 100000,
    highlight: true,
    mainImage: "/products/gratitud-verde-5.png",
    category: CATEGORIES[1],
  },
  {
    id: 4,
    name: "Kit plenitud",
    slug: "kit-plenitud",
    price: 100000,
    highlight: true,
    mainImage: "/products/kit-plenitud.png",
    category: CATEGORIES[2],
  },
];
