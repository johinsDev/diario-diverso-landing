"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { Product } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  products: Product[];
};

export function SearchProducts({ products }: Props) {
  const search = useSearchParams();

  const router = useRouter();

  const open = search.get("search") === "true";

  const handleOpenChange = (open: boolean) => {
    const searchParams = new URLSearchParams(search);
    if (open) {
      searchParams.set("search", "true");
    } else {
      searchParams.delete("search");
    }

    router.push(`?${searchParams.toString()}`);
  };


  return (
    <CommandDialog
      open={open}
      onOpenChange={handleOpenChange}
      commandProps={{
        loop: true,
      }}
    >
      <CommandInput placeholder="Qué estás buscando?" />
      <CommandList>
        <CommandEmpty>No se encontraron productos</CommandEmpty>

        <CommandGroup heading="Productos">
          {products.map((product) => (
            <CommandItem
              key={product._id}
              onSelect={() => router.push(`/tienda/${product.slug}`)}
              className="cursor-pointer"
            >
              <span>{product.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
