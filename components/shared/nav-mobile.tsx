import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

export function NavMobile() {
  return (
    <Sheet>
      <SheetTrigger className="px-4 pr-0 text-accent">
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl md:text-6xl font-moontime font-normal text-primary">
            Diario Diverso
          </div>

          <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </div>

        <div className="flex flex-col text-left gap-2">
          <Link
            href="#"
            className="text-muted-foreground transition-colors text-lg hover:text-primary"
          >
            Inicio
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors text-lg hover:text-primary"
          >
            Tienda
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors text-lg hover:text-primary"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors text-lg hover:text-primary"
          >
            Nosotros
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors text-lg hover:text-primary"
          >
            FAQ
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
