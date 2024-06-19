import FilterCategories from "@/components/store/categories/filter-categories";
import { Category } from "@/types";
import { PropsWithChildren } from "react";

type Props = {
  params: {
    slug: string[];
  };
};

const CATEGORIES: Category[] = [
  { id: 0, name: "Todos", slug: "" },
  { id: 1, name: "Diarios", slug: "diarios" },
  { id: 2, name: "Kits", slug: "kits" },
  { id: 3, name: "Accesorios", slug: "accesorios" },
];

export default function CategoriesLayout(props: PropsWithChildren<Props>) {
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
