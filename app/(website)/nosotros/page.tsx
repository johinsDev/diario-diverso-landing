import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce más sobre nuestra empresa y nuestra misión.",
};

export default function AboutUsPage() {
  return (
    <main className="flex-1 flex flex-col container py-4 md:py-10">
      <h1 className="text-4xl font-bold mb-2">Nosotros</h1>

      <h2 className="text-xl text-gray-600 mb-8">
        En Diario Diverso, creemos que cada persona tiene una historia única que
        merece ser contada, explorada y celebrada.
      </h2>

      <Image
        src="/about-us.png"
        width={776}
        height={496}
        sizes="(min-width: 1024px) 776px, 100vw"
        alt="About Us"
        className="object-contain mx-auto"
      />

      <p className="mt-4 text-lg text-justify">
        Nuestra misión es proporcionar herramientas simples pero poderosas que
        empoderen a las personas a llevar un registro de sus vidas, cultivando
        hábitos positivos, fomentando la gratitud, enriqueciendo relaciones y
        explorando la creatividad a través de la escritura, tanto en formato
        físico como digital.
      </p>

      <p className="mt-4 text-lg text-justify">
        Nuestros diarios están diseñados para promover la salud mental y el
        bienestar. Desde diarios de lectura que profundizan tu experiencia
        literaria, hasta diarios de hábitos que te ayudan a construir una vida
        más saludable y plena, cada producto está hecho para ser un compañero
        personalizable en tu viaje hacia el autoconocimiento y la
        transformación, disponible en la comodidad del papel o la conveniencia
        de una aplicación digital.
      </p>

      <p className="mt-4 text-lg text-justify">
        Nuestro compromiso con la comunidad es fuerte. Invitamos a nuestros
        usuarios a personalizar sus diarios con sus propios colores y estilos, y
        a compartir sus experiencias en nuestras redes sociales. Esta comunidad
        vibrante y solidaria es una parte esencial de lo que hacemos, inspirando
        y motivando a cada miembro a crecer y prosperar.
      </p>

      <p className="mt-4 text-lg text-justify">
        Diario Diverso no es solo una colección de productos, es una invitación
        a un viaje personal y colectivo hacia una vida más rica y significativa.
        Únete a nosotros y descubre cómo la escritura puede transformar tu
        mundo. Con Diario Diverso, cada página, ya sea física o digital, es una
        nueva oportunidad para aprender, crecer y celebrar cada momento de tu
        vida.
      </p>
    </main>
  );
}
