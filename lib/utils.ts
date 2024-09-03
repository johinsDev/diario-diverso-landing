import { Product } from "@/types";
import { type ClassValue, clsx } from "clsx";
import colorConvert from "color-convert";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertHEXtoHSL_Updated(hex: string) {
  const hslArr = colorConvert.hex.hsl(hex);
  return `${hslArr[0]} ${hslArr[1]}% ${hslArr[2]}%`;
}

export function currencyFormat(price: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
    currencyDisplay: "narrowSymbol",
  }).format(price);
}

function validateIfHasDiscount(product: Product) {
  if (!product.discount) return false;

  if (product.discount <= 0) return false;

  if (!product.discountDateStart || !product.discountDateEnd) return false;

  if (new Date(product.discountDateStart) > new Date()) return false;

  if (new Date(product.discountDateEnd) < new Date()) return false;

  return true;
}

function getPriceWithDiscount(product: Product) {
  if (!validateIfHasDiscount(product)) return null;

  return product.price * (1 - product.discount! / 100);
}

export function getPrice(product: Product) {
  const discount = currencyFormat(
    getPriceWithDiscount(product) || product.price
  );

  const price = currencyFormat(product.price);

  const hasDiscount = validateIfHasDiscount(product);

  return { discount, price, hasDiscount };
}
