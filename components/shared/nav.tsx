import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import Link from "next/link";

export function Nav() {
  return <header className="sticky top-0 flex h-20 items-center gap-4 w-full bg-white z-50">
    <nav className="hidden container mx-auto w-full flex-col gap-6 text-lg md:flex md:flex-row md:items-center md:gap-5 md:text-base lg:gap-12">
      <Link
        href="#"
        className="flex items-center gap-2 text-lg font-semibold mr-auto"
      >
        <Book className="h-6 w-6 text-primary" />
        <span>Diario Diverso</span>
      </Link>

      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-primary"
      >
        Inicio
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-primary"
      >
        Tienda
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-primary"
      >
        Blog
      </Link>

      <Button size={'xl'} variant={"outline"}>Comprar</Button>
    </nav>
  </header>
}
