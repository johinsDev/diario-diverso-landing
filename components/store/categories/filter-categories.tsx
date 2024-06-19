"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { useParams } from "next/navigation";

type Props = {
  categories: Category[];
};

export default function FilterCategories({ categories }: Props) {
  const params = useParams<{ slug?: string[] }>();

  const categorySlug = params.slug?.join("/") || "";

  return (
    <div className="flex items-center gap-4 mt-8">
      {categories.map((category) => {
        const isActive = category.slug === categorySlug;

        return (
          <Link
            key={category.id}
            href={`/tienda/categorias/${category.slug}`}
            className={cn(
              "px-8 py-3 border border-border rounded-full hover:bg-primary hover:text-white font-medium",
              {
                "bg-primary text-white": isActive,
              },
            )}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}
