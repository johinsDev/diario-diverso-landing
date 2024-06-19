"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Search } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";

type Props = {
  categories: Category[];
};

const SearchProducts = dynamic(
  () =>
    import("@/components/store/categories/search-products").then(
      (mod) => mod.SearchProducts,
    ),
  {
    ssr: false,
  },
);

export default function FilterCategories({ categories }: Props) {

  const params = useParams<{ slug?: string[] }>();

  const router = useRouter();

  const search = useSearchParams();

  const categorySlug = params.slug?.join("/") || "";

  const onOpen = () => {
    const searchParams = new URLSearchParams(search);

    searchParams.set("search", "true");

    router.push(`?${searchParams.toString()}`);
  }

  return (
    <>
      <SearchProducts />

      <div className="flex items-center gap-4 mt-8">
        {categories.map((category) => {
          const isActive = category.slug === categorySlug;

          return (
            <Link
              key={category.id}
              href={
                category.slug ? `/tienda/categorias/${category.slug}` : "/tienda"
              }
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


        <button
          className="ml-auto text-muted-foreground"
          onClick={() => onOpen()}
        >
          <Search size={32} />
        </button>
      </div>
    </>
  );
}
