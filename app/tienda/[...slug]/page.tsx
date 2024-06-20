import { GridImages } from "@/components/store/detail/grid-images";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/constants";
import dynamic from "next/dynamic";
import Link from "next/link";

const ImagesModal = dynamic(
  () =>
    import("@/components/store/detail/images-modal").then(
      (mod) => mod.ImagesModal,
    ),
  {
    ssr: false,
  },
);

export default function Page() {
  const product = PRODUCTS[0];

  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <main className="flex-1 flex flex-col container py-4 md:py-10">
      <ul className="flex items-center text-muted-foreground text-sm  mb-4">
        <li className="flex items-center after:content-[' '] after:size-1 after:bg-muted-foreground/20 after:mx-2 after:rounded-full">
          <Link href="/">Inicio</Link>
        </li>
        <li className="flex items-center after:content-[' '] after:size-1 after:bg-muted-foreground/20 after:mx-2 after:rounded-full">
          <Link href="/tienda">Tienda</Link>
        </li>
        <li className="text-foreground lowercase first-letter:capitalize">KIT DE LECTURAS CON ESTILO</li>
      </ul>

      <div className="flex gap-4 flex-col xl:gap-12 xl:flex-row xl:items-stretch">
        <GridImages product={product} />

        <div className="xl:w-1/2 flex flex-col justify-between">

          <div className="xl:text-lg">
            <h1 className="text-h3 leading-h3 uppercase first-letter:uppercase mb-4">
              KIT DE LECTURAS CON ESTILO
            </h1>


            <p className="text-muted-foreground">
              Sumérgete en tus aventuras literarias con nuestro Kit de Lecturas
              con Estilo. Diseñado para los amantes de los libros, este kit te
              ofrece todo lo que necesitas para personalizar y disfrutar aún más
              de tu pasión por la lectura
            </p>

            <div className="text-muted-foreground mt-4">
              <strong>
                INCLUYE:
              </strong>
              <ul className="list-disc list-inside flex flex-col gap-1 mt-2">
                <li>
                  Diario de Lectura: Personaliza tu diario con el diseño y color
                  de tu elección.
                </li>

                <li>
                  Esfero: Selecciona el color de tu esfero favorito (sujeto a
                  disponibilidad).
                </li>

                <li>
                  Paquete de 30 Mini Portadas: Elige las portadas de los libros
                  que prefieras para pegar en tu diario.
                </li>

                <li>
                  -Separador de Hojas Magnético: Opta por el diseño de separador
                  que prefieras (sujeto a disponibilidad).
                </li>
              </ul>
            </div>
          </div>


          <div>
            <h2 className="text-h3 my-4">{price}</h2>

            <Button className="w-full" size={"xl"} variant={"accent"} asChild>
              <Link target="_blank" href="https://wa.me/message/3VYDBVF6QEELO1">
                Comprar ahora
              </Link>
            </Button>

            <p className="text-center text-sm text-muted-foreground/80 mt-4">Estimate delivery times: 3-6 days (International)</p>
            <p className="text-center text-sm text-muted-foreground/80 mt-1">
              Return within 45 days of purchase. Duties & taxes are
              non-refundable.
            </p>
          </div>
        </div>
      </div>

      <ImagesModal images={product.images.sort((a, b) => a.order - b.order)} />
    </main>
  );
}
