import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Nav() {
  return <header className="sticky top-0 flex h-20 items-center gap-4 w-full z-50 bg-white">
    <nav className="hidden container mx-auto w-full flex-col gap-6 text-lg md:flex md:flex-row md:items-center md:gap-5 md:text-base lg:gap-12">
      <Link
        href="#"
        className="flex items-center gap-2 text-lg font-semibold mr-auto"
      >

        <div className="text-foreground text-6xl font-moontime font-normal text-primary">Diario Diverso</div>
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
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-primary"
      >
        Nosotros
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-primary"
      >
        FAQ
      </Link>

      <Button size={'xl'} variant={"default"}>Comprar</Button>
    </nav>
  </header>
}
