import { currencyFormat } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export function ProductCard({ product, priority }: ProductCardProps) {
  const price = currencyFormat(product.price);

  const mainImage = product.gallery?.images[0];

  const imageUrl =
    mainImage &&
    urlForImage(mainImage)?.width(400).fit("crop").auto("format").url();

  return (
    <Link href={`/tienda/${product.slug}`} className="group">
      <div className="rounded-lg aspect-[3/4] overflow-hidden p-4 bg-muted/40 grid place-content-center py-2 transform transition-all group-hover:scale-[1.02] duration-300">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={mainImage?.alt || "product"}
            className="object-contain h-full"
            width={270}
            height={400}
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            blurDataURL={mainImage?.asset.metadata.lqip}
            placeholder="blur"
            priority={priority}
          />
        )}
      </div>

      <div className="flex items-center justify-between gap-2 mt-3 group-hover:text-primary group-hover:translate-y-1 transition-all duration-300 xl:flex-col xl:text-left xl:items-start xl:gap-0.5">
        <div className="text-lg text-foreground">{product.title}</div>

        <div className="text-lg text-muted-foreground">{price}</div>
      </div>
    </Link>
  );
}
