"use client";

import { cn } from "@/lib/utils";
import { CategoryPost } from "@/types";
import { useRouter } from "next/navigation";
import { useCategory } from "./use-category";

type CategoriesProps = {
  categories: CategoryPost[];
  detailed?: boolean;
};

export function Categories({ categories, detailed }: CategoriesProps) {
  const { onSelectCategory, selectedCategory } = useCategory();

  const router = useRouter();

  // @TODO: Refactor use link component and use query param to filter by category
  return (
    <div className="flex flex-col gap-4 mt-4">
      <button
        className={cn(
          "bg-white text-left font-semibold hover:bg-primary rounded-full px-8 w-fit py-2 hover:text-white capitalize transition-all duration-300",
          !selectedCategory && "bg-primary text-white",
        )}
        onClick={() => onSelectCategory(null)}
      >
        Todas las categorias
      </button>
      {categories.map((category) => (
        <button
          key={category._id}
          className={cn(
            "bg-white text-left font-semibold hover:bg-primary rounded-full px-8 w-fit py-2 hover:text-white capitalize transition-all duration-300",
            selectedCategory?._id === category._id && "bg-primary text-white",
          )}
          onClick={() => {
            onSelectCategory(category);
            if (detailed) {
              router.push(`/blog/`);
            }
          }}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
}
