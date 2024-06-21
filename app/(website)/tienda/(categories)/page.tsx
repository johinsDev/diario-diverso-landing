import ListOfProducts from "@/components/store/categories/list-of-products";
import { loadProducts } from "@/sanity/loader/loadQuery";
import { Suspense } from "react";

export default async function Page() {
  const { data: products } = await loadProducts();

  return (
    <Suspense>
      <ListOfProducts products={products} />;
    </Suspense>
  );
}
