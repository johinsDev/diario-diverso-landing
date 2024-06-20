import { currencyFormat } from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const price = currencyFormat(product.price);

  return (
    <Link
      href={`/tienda/${product.slug}`}
      key={product.id}
      className="group"
    >
      <div className="rounded-lg aspect-square overflow-hidden p-4 bg-muted/40 grid place-content-center py-2 transform transition-all group-hover:scale-[1.02] duration-300">
        <Image
          src={product.mainImage}
          alt={product.name}
          className="object-contain w-full aspect-square"
          width={270}
          height={220}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>

      <div className="flex items-center justify-between gap-2 mt-3 group-hover:text-primary group-hover:translate-y-1 transition-all duration-300">
        <div className="text-xl text-foreground">{product.name}</div>

        <div className="text-xl text-muted-foreground">{price}</div>
      </div>
    </Link>
  );
}
