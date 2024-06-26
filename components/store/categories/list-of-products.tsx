import { Product } from "@/types";
import { ProductCard } from "../shared/product-card";

type Props = {
  products: Product[];
};

export default function ListOfProducts({ products }: Props) {
  return (
    <div className="mt-8 gap-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => {
        return (
          <ProductCard
            product={product}
            key={product._id}
            priority={index < 6}
          />
        );
      })}
    </div>
  );
}
