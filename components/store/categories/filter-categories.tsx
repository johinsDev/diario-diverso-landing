"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  };

  return (
    <>
      <SearchProducts />

      <div className="flex items-center gap-8 mt-8 flex-wrap">
        {categories.map((category) => {
          const isActive = category.slug === categorySlug;

          return (
            <Link
              key={category.id}
              href={
                category.slug
                  ? `/tienda/categorias/${category.slug}`
                  : "/tienda"
              }
              className={cn(
                "px-8 py-3 border border-border rounded-full hover:bg-primary hover:text-white font-medium hidden lg:block transition-colors duration-200",
                {
                  "bg-primary text-white": isActive,
                },
              )}
            >
              {category.name}
            </Link>
          );
        })}

        <Select
          onValueChange={(value) => {
            if (value === "all") {
              router.push("/tienda");
            } else {
              router.push(`/tienda/categorias/${value}`);
            }
          }}
          defaultValue="all"
        >
          <SelectTrigger className="lg:hidden flex-1">
            <SelectValue placeholder="Categorías" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.slug || "all"} >
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

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
