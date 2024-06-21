import ListOfProducts from "@/components/store/categories/list-of-products";
import { loadProductsByCategory } from "@/sanity/loader/loadQuery";
import { Suspense } from "react";

type Props = {
  params: {
    slug: string[];
  };
};

export default async function Page(props: Props) {
  const category = props.params.slug?.join("/") || "";

  const { data: products } = await loadProductsByCategory(category);

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
