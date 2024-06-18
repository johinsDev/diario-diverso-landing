import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Footer() {
  return (
    <footer className="pb-16 container mx-auto text-center">
      <h4 className="text-h4 font-semibold text-foreground lowercase first-letter:capitalize">
        DISFRUTA DE NUESTRA EXPERIENCIA
      </h4>
      <div className="text-primary">
        (Suscríbete y enterate de todas las novedades que tenemos para ti)
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 lg:grid-cols-5 text-left mt-12">
        <Link href={'/'} className="mx-auto">
          <Image src="/logo-color.png" width={225} height={225} alt="logo" />
        </Link>

        <div>
          <div className="mb-8 text-foreground font-semibold">
            Diario Diverso
          </div>
          <ul className="space-y-1">
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
              <Link href="#" className="text-gray-500 hover:text-primary">Nosotros</Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-primary">Preguntas frecuentes</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-8 text-foreground font-semibold">
            Productos
          </div>
          <ul className="space-y-1">
            <li>
              <Link href="#" className="text-gray-500 hover:text-primary">Diario de amistad</Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-primary">Diario de parejas</Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-primary">Diario de habitos</Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-primary">Diario lector</Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-primary">Diario de gratitud</Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-primary">Separadores magneticos</Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-primary">Mini portadas </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-primary">Esferos en gel</Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 flex flex-col gap-8 justify-between">
          <form className="flex flex-col md:flex-row md:items-center gap-2">
            <Input type="email" placeholder="Correo electrónico" className="flex-1 flex-shrink-0 min-h-12" />
            <Button className="rounded-md w-full md:w-40 flex-shrink-0" size='xl' variant={'secondary'}>Subscribirme</Button>
          </form>

          <div className="text-center flex flex-col items-center md:items-start lg:items-center gap-2">
            <div className="text-primary text-xl font-semibold">Nuestras redes sociales</div>

            <div className="flex items-center gap-2">
              <Link href="https://www.tiktok.com/@diario.diverso" target="_blank">
                <Image src="/tiktok.png" width={60} height={60} alt="tiktok diario diverso" />
              </Link>

              <Link href="https://www.facebook.com/profile.php?id=61559389247644" target="_blank">
                <Image src="/facebook.png" width={60} height={60} alt="facebook diario diverso" />
              </Link>

              <Link href="https://www.instagram.com/diario.diverso" target="_blank">
                <Image src="/instagram.png" width={60} height={60} alt="instagram diario diverso" />
              </Link>

              <Link href="https://wa.me/message/3VYDBVF6QEELO1" target="_blank">
                <Image src="/whastapp.svg" width={60} height={60} alt="whastapp diario diverso" />
              </Link>
            </div>

            <Link href="mailto:contacto@diariodiverso.com" className="text-primary text-lg">
              contacto@diariodiverso.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
