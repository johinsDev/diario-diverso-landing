import { getPrice } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};


export function ProductCard({ product, priority }: ProductCardProps) {
  const { discount, hasDiscount, price } = getPrice(product);

  const mainImage = product.gallery?.images[0];

  const imageUrl =
    mainImage &&
    urlForImage(mainImage)?.width(400).fit("crop").auto("format").url();

  return (
    <Link href={`/tienda/${product.slug}`} className="group">
      <div className="aspect-[3/4] overflow-hidden p-4 bg-muted/40 grid place-content-center py-2 transform transition-all group-hover:scale-[1.02] duration-300 relative">
        {hasDiscount && (
          <div className="absolute top-0 left-0 bg-destructive text-white text-sm font-bold p-2 z-10">
            {product.discount}% Descuento
          </div>
        )}

        {imageUrl && (
          <Image
            src={imageUrl}
            alt={mainImage?.alt || "product"}
            className="object-cover h-full"
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            blurDataURL={mainImage?.asset.metadata.lqip}
            placeholder="blur"
            priority={priority}
          />
        )}
      </div>

      <div className="flex items-center justify-between gap-2 mt-3 group-hover:text-primary group-hover:translate-y-1 transition-all duration-300 lg:flex-col lg:gap-0.5">
        <div className="text-lg text-foreground">{product.title}</div>

        <div className="text-lg text-muted-foreground flex items-center gap-4">
          <span className="text-black font-bold">{price}</span>

          {hasDiscount && (
            <span className="relative inline-block before:content-[''] before:absolute before:top-[calc(50%_-1px)] before:left-[-5%] before:w-[110%] before:h-0.5 before:bg-destructive before:opacity-70 before:rounded-sm text-destructive/70">
              {discount}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
