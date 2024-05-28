import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Book, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-stone-50 pb-20">
      <div className="container mx-auto">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Book className="h-8 w-8 text-primary" />
              <h3 className="text-h3 font-space font-semibold">
                Diario Diverso
              </h3>
            </div>

            <div className="text-gray-500 mb-4 mt-1">
              DigiCraft is a digital marketing agency based on planet earth established © 2023.
            </div>
          </div>

          <div className="flex items-center gap-20">
            <ul className="space-y-2">
              <li className="font-semibold pb-2">
                Menu
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">Inicio</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">Tienda</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">Blog</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">Contacto</Link>
              </li>
            </ul>

            <ul className="space-y-2">
              <li className="font-semibold pb-2">
                Diarios
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">Lectura</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">Escritura</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">Dibujo</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">Pintura</Link>
              </li>
            </ul>
          </div>
        </div>


        <div className="flex items-end justify-between">
          <div className="w-3/5">
            <h5 className="text-h5 font-semibold">Subscribe to Newsletter</h5>
            <div className="text-gray-500 mb-4 mt-1">Stay updated on the latest in digital trends and insights.</div>

            <div className="flex items-center gap-2">
              <Input type="email" placeholder="Enter your email" />
              <Button className="rounded px-2" size='xl' variant={'secondary'}>Subscribir</Button>
            </div>
          </div>

          <div className="flex items-center gap-4 w-2/5 justify-end">
            <Link href="#" className="text-primary">
              <Instagram className="size-[50px] text-secondary" />
            </Link>

            <Link href="#" className="text-secondary">
              <Twitter className="size-[50px] text-secondary" />
            </Link>

            <Link href="#" className="text-secondary">
              <Youtube className="size-[50px] text-secondary" />
            </Link>

            <Link href="#" className="text-secondary">
              <Facebook className="size-[50px] text-secondary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
