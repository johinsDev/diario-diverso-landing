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
    urlForImage(mainImage)?.width(1200).fit("crop").auto("format").url();

  return (
    <Link href={`/tienda/${product.slug}`} className="group">
      <div className="rounded-lg aspect-square overflow-hidden p-4 bg-muted/40 grid place-content-center py-2 transform transition-all group-hover:scale-[1.02] duration-300">
        <Image
          src={imageUrl}
          alt={mainImage?.alt || "product"}
          className="object-contain w-full aspect-square"
          width={270}
          height={220}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        // blurDataURL={mainImage?.asset.metadata.lqip}
        // placeholder="blur"
        // priority={priority}
        />
      </div>

      <div className="flex items-center justify-between gap-2 mt-3 group-hover:text-primary group-hover:translate-y-1 transition-all duration-300">
        <div className="text-xl text-foreground">{product.title}</div>

        <div className="text-xl text-muted-foreground">{price}</div>
      </div>
    </Link>
  );
}
