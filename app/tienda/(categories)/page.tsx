import ListOfProducts from "@/components/store/categories/list-of-products";
import { PRODUCTS } from "@/constants";
import { generateBase64 } from "@/lib/generate-base-64";
import { Suspense } from "react";

export default async function Page() {
  const products = await Promise.all(
    PRODUCTS.map(async (product) => {
      const base64 = await generateBase64(product.mainImage);

      return {
        ...product,
        base64,
      };
    }),
  );

  return (
    <Suspense>
      <ListOfProducts products={products} />;
    </Suspense>
  );
}
