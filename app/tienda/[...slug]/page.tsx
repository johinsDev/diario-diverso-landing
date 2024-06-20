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

  return (
    <main className="flex-1 flex flex-col container py-4 md:py-20">
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/tienda">Tienda</Link>
        </li>
        <li>Headphones or-27n</li>
      </ul>

      <div className="flex gap-4 flex-col xl:flex-row xl:items-center">
        <GridImages product={product} />

        <div className="xl:w-1/2">
          <h1>Headphones or-27n</h1>

          <p>
            Whether you're on the move or powering through your workout, these
            headphones are designed to keep up with your active lifestyle
            effortlessly.
          </p>

          <h2>USD 97.99</h2>

          <Button>Comprar</Button>

          <p>Estimate delivery times: 3-6 days (International)</p>
          <p>
            Return within 45 days of purchase. Duties & taxes are
            non-refundable.
          </p>
        </div>
      </div>

      <ImagesModal images={product.images.sort((a, b) => a.order - b.order)} />
    </main>
  );
}
