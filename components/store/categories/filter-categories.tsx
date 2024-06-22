"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Category, Product } from "@/types";
import { Search } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";

type Props = {
  categories: Category[];
  products: Product[];
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

const ALL_CATEGORY: Category = {
  _id: "all",
  title: "Todas",
  slug: "",
  _type: "category",
};

export default function FilterCategories({
  categories: _categories,
  products,
}: Props) {
  const params = useParams<{ slug?: string[] }>();

  const router = useRouter();

  const search = useSearchParams();

  const categorySlug = params.slug?.join("/") || "";

  const onOpen = () => {
    const searchParams = new URLSearchParams(search);

    searchParams.set("search", "true");

    router.push(`?${searchParams.toString()}`);
  };

  const categories = [ALL_CATEGORY, ..._categories];

  return (
    <>
      <SearchProducts products={products} />

      <div className="flex items-center gap-4 mt-8 flex-wrap">
        {categories.map((category) => {
          const isActive = category.slug === categorySlug;

          return (
            <Link
              key={category._id}
              href={
                category.slug
                  ? `/tienda/categorias/${category.slug}`
                  : "/tienda"
              }
              className={cn(
                "px-8 py-3 border border-border rounded-full hover:bg-primary hover:text-white font-medium hidden md:block transition-colors duration-200 lowercase first-letter:capitalize",
                {
                  "bg-primary text-white": isActive,
                },
              )}
            >
              {category.title}
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
          <SelectTrigger className="md:hidden flex-1">
            <SelectValue placeholder="Categorías" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category._id} value={category.slug || "all"}>
                {category.title}
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
