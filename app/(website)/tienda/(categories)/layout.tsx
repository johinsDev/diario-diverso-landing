import FilterCategories from "@/components/store/categories/filter-categories";
import { loadCategories, loadProducts } from "@/sanity/loader/loadQuery";
import { PropsWithChildren, Suspense } from "react";

export default async function CategoriesLayout(props: PropsWithChildren<{}>) {
  const { data: categories } = await loadCategories();

  const { data: products } = await loadProducts();

  return (
    <main className="flex-1 flex flex-col container py-4 md:py-10">
      <h1 className="font-semibold text-center">Nuestros productos</h1>

      <div className="mt-2 text-muted-foreground text-xl text-center">
        Consulta nuestra colección completa de productos.
      </div>

      <Suspense>
        <FilterCategories categories={categories} products={products} />
      </Suspense>

      {props.children}
    </main>
  );
}
