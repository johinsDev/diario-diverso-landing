import ListOfProducts from "@/components/store/categories/list-of-products";
import { loadProducts } from "@/sanity/loader/loadQuery";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Tienda",
  description:
    "Descubre nuestros productos y encuentra el que mejor se adapte a tus necesidades.",
};

export default async function Page() {
  const { data: products } = await loadProducts();

  return (
    <Suspense>
      <ListOfProducts products={products} />
    </Suspense>
  );
}
