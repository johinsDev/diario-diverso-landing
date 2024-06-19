import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  products: Product[];
};

export default function ListOfProducts({ products }: Props) {
  return (
    <div className="mt-8 gap-8 grid md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const price = new Intl.NumberFormat("es-ES", {
          style: "currency",
          currency: "COP",
          maximumFractionDigits: 0,
          currencyDisplay: "narrowSymbol",
        }).format(product.price);

        return (
          <Link
            href={`/tienda/${product.slug}`}
            key={product.id}
            className="group"
          >
            <div className="rounded-lg aspect-[3/4] bg-muted/40 grid place-content-center py-2 transform transition-all group-hover:scale-[1.02] duration-300">
              <Image
                src={product.mainImage}
                alt={product.name}
                width={400}
                height={700}
                className="aspect-[3/4] object-contain"
                placeholder="blur"
                blurDataURL={product.base64}
              />
            </div>

            <div className="flex items-center justify-between gap-2 mt-3 group-hover:text-primary group-hover:translate-y-1 transition-all duration-300">
              <div className="text-xl text-foreground">{product.name}</div>

              <div className="text-xl text-muted-foreground">{price}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
