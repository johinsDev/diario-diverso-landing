"use client";

import { cn } from "@/lib/utils";
import { PostDocument } from "@/types";
import { useCategory } from "./use-category";

type CategoriesProps = {
  posts: PostDocument[];
};

export function Categories({ posts }: CategoriesProps) {
  const { onSelectCategory, selectedCategory } = useCategory();

  const categories = posts
    .map((post) => post.category)
    .filter(
      (category, index, self) =>
        self.findIndex((c) => c._id === category._id) === index,
    );

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
          onClick={() => onSelectCategory(category)}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
}
