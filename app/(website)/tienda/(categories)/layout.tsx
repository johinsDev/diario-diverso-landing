import FilterCategories from "@/components/store/categories/filter-categories";
import { loadCategories } from "@/sanity/loader/loadQuery";
import { PropsWithChildren, Suspense } from "react";

export default async function CategoriesLayout(props: PropsWithChildren<{}>) {
  const { data: categories } = await loadCategories();

  return (
    <main className="flex-1 flex flex-col container py-4 md:py-20">
      <h1 className="font-semibold">Tienda</h1>

      <div className="mt-2 text-muted-foreground text-xl">
        Consulta nuestra colección completa de productos.
      </div>

      <Suspense>
        <FilterCategories categories={categories} />
      </Suspense>

      {props.children}
    </main>
  );
}
