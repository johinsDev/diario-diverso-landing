import FilterCategories from "@/components/store/categories/filter-categories";
import { CATEGORIES } from "@/constants";
import { PropsWithChildren } from "react";

export default function CategoriesLayout(props: PropsWithChildren<{}>) {
  return (
    <main className="flex-1 flex flex-col container py-4 md:py-20">
      <h1 className="font-semibold">Tienda</h1>

      <div className="mt-2 text-muted-foreground text-xl">
        Consulta nuestra colección completa de productos.
      </div>

      <FilterCategories categories={CATEGORIES} />

      {props.children}
    </main>
  );
}
