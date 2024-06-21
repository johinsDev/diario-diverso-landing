"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList
} from "@/components/ui/command";
import { useRouter, useSearchParams } from "next/navigation";

export function SearchProducts() {
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
          {/* {PRODUCTS.map((product) => (
            <CommandItem
              key={product.id}
              onSelect={() => router.push(`/tienda/${product.slug}`)}
              className="cursor-pointer"
            >
              <span>{product.name}</span>
            </CommandItem>
          ))} */}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
