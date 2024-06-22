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
  const result = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
    currencyDisplay: "narrowSymbol",
  }).format(price);

  return (
    result.substring(result.length - 1) + result.substring(0, result.length - 1)
  );
}
