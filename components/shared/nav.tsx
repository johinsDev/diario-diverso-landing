import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Link from "next/link";

const NavMobile = dynamic(() => import("./nav-mobile").then(m => m.NavMobile), { ssr: false });

export function Nav() {
  return <header className="sticky top-0 flex h-20 items-center gap-4 w-full z-50 bg-white">
    <nav className="container mx-auto flex w-full gap-6 text-lg md:flex md:flex-row md:items-center md:gap-5 md:text-base lg:gap-12">
      <Link
        href="#"
        className="flex items-center gap-2 text-lg font-semibold mr-auto"
      >
        <div className="text-4xl md:text-6xl font-moontime font-normal text-primary">Diario Diverso</div>
      </Link>

      <div className="hidden lg:flex gap-6">
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
      </div>

      <div className="lg:hidden flex items-center">
        <Button variant={"prime"} className="relative w-28" size={'xl'}>
          <span className="absolute bg-white left-0.5 right-0.5 bottom-0.5 top-0.5 text-accent grid place-content-center rounded-full">Comprar</span>
        </Button>

        <NavMobile />
      </div>
      <Button size={'xl'} variant={"default"} className="hidden lg:flex">Comprar</Button>
    </nav>
  </header>
}
