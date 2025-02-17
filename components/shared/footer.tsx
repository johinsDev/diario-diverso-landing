import { resolveHref } from "@/sanity/lib/utils";
import { loadLastProducts } from "@/sanity/loader/loadQuery";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import SubscribeForm from "./subscribe-form";

export async function Footer() {
  const { data: products } = await loadLastProducts();

  return (
    <footer className="py-16 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-8 lg:grid-cols-5 text-left">
      <Link href={"/"} className="mx-auto">
        <Image src="/logo-color.png" width={225} height={225} alt="logo" />
      </Link>

      <div>
        <div className="mb-8 text-foreground font-semibold">Diario Diverso</div>
        <ul className="space-y-1">
          <li>
            <Link href="/" className="text-gray-500 hover:text-primary">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/tienda" className="text-gray-500 hover:text-primary">
              Tienda
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-500 hover:text-primary">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/nosotros" className="text-gray-500 hover:text-primary">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-gray-500 hover:text-primary">
              Preguntas frecuentes
            </Link>
          </li>

          <li>
            <Link
              href="/politica-privacidad.pdf"
              download
              target="_blank"
              className="text-gray-500 hover:text-primary"
            >
              Política de privacidad
            </Link>
          </li>

          <li>
            <Link
              href="/politica-devoluciones.pdf"
              download
              target="_blank"
              className="text-gray-500 hover:text-primary"
            >
              Política de devolución
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <div className="mb-8 text-foreground font-semibold">Productos</div>

        <ul className="space-y-1">
          {products.map((product) => (
            <li key={product._id}>
              <Link
                href={resolveHref("product", product.slug)}
                className="text-gray-500 hover:text-primary capitalize"
              >
                {product.title.toLowerCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-2 flex flex-col gap-4 justify-between">
        <div>
          <h4 className="text-h5 font-semibold text-foreground lowercase first-letter:capitalize">
            DISFRUTA DE NUESTRA EXPERIENCIA
          </h4>

          <div className="text-primary">
            (Suscríbete y enterate de todas las novedades que tenemos para ti)
          </div>
        </div>

        <Suspense>
          <SubscribeForm />
        </Suspense>

        <div className="text-center flex flex-col items-center md:items-start lg:items-center gap-2">
          <div className="text-primary text-xl font-semibold">
            Nuestras redes sociales
          </div>

          <div className="flex items-center gap-2">
            <Link href="https://www.tiktok.com/@diario.diverso" target="_blank">
              <Image
                src="/tiktok.png"
                width={48}
                height={48}
                alt="tiktok diario diverso"
              />
            </Link>

            <Link
              href="https://www.facebook.com/profile.php?id=61559389247644"
              target="_blank"
            >
              <Image
                src="/facebook.png"
                width={48}
                height={48}
                alt="facebook diario diverso"
              />
            </Link>

            <Link
              href="https://www.instagram.com/diario.diverso"
              target="_blank"
            >
              <Image
                src="/instagram.png"
                width={48}
                height={48}
                alt="instagram diario diverso"
              />
            </Link>

            <Link href="https://wa.me/message/3VYDBVF6QEELO1" target="_blank">
              <Image
                src="/whatsapp.svg"
                width={48}
                height={48}
                alt="whastapp diario diverso"
              />
            </Link>
          </div>

          <Link
            href="mailto:diariodiverso.info@gmail.com"
            className="text-primary text-lg"
          >
            diariodiverso.info@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
