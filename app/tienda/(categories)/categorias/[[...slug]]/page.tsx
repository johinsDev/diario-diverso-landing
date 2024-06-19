import ListOfProducts from "@/components/store/categories/list-of-products";
import { PRODUCTS } from "@/constants";
import { generateBase64 } from "@/lib/generate-base-64";
import { Suspense } from "react";

type Props = {
  params: {
    slug: string[];
  };
};

export default async function Page(props: Props) {
  const category = props.params.slug?.join("/") || "";

  let products = category
    ? PRODUCTS.filter((product) => product.category.slug === category)
    : PRODUCTS;

  products = await Promise.all(
    PRODUCTS.map(async (product) => {
      const base64 = await generateBase64(product.mainImage);

      return {
        ...product,
        base64,
      };
    }),
  );


  return (
    <>
      {!products.length && (
        <div className="text-center mt-10">
          <h1 className="text-3xl font-semibold">No hay productos</h1>
          <p className="text-lg text-muted-foreground">
            Lo sentimos, no hay productos disponibles en esta categoría.
          </p>
        </div>
      )}

      <Suspense>
        <ListOfProducts products={products} />
      </Suspense>
    </>
  );
}
