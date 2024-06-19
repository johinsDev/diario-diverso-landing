import ListOfProducts from "@/components/store/categories/list-of-products";
import { PRODUCTS } from "@/constants";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <ListOfProducts products={PRODUCTS} />;
    </Suspense>
  );
}
