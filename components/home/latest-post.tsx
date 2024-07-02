import { Button } from "@/components/ui/button";
import { loadLastPosts } from "@/sanity/loader/loadQuery";
import Link from "next/link";
import { Post } from "../shared/post";

const POSTS = [
  {
    title:
      "La Ciencia de la Gratitud: Cómo Llevar un Diario Puede Mejorar tu bienestar",
    category: "Gratitud",
    date: "7 JUN",
    image: "/blog-gratitud.png",
  },
  {
    title:
      "El poder de la lectura: Cómo un Diario de Lectura Puede Transformar tu Experiencia Literaria",
    category: "Lectura",
    date: "12 JUN",
    image: "/blog-lectura.jpg",
  },
  {
    title:
      "Construyendo Hábitos Exitosos: El Impacto de un Diario de Hábitos en tu Vida",
    category: "Habitos",
    date: "17 JUN",
    image: "/blog-habitos.jpg",
  },
];

function slugify(text: string) {
  return text.toLowerCase().replace(/ /g, "-");
}

export async function LatestPost() {
  const { data } = await loadLastPosts();


  return (
    <section className="bg-white full-width text-center py-20 w-full flex flex-col gap-4 items-center">
      <div className="container mx-auto">
        <div>BLOG</div>
        <h2 className="text-h2 leading-h2 font-montserrat font-bold">
          Ultimos Artículos
        </h2>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {data.map((post, i) => {
            return (
              <Post post={post} key={i} />
            );
          })}
        </section>

        <Button variant={"link"} size={"xl"} className="font-semibold mt-12">
          <Link href="/blog">Ver todos los artículos</Link>
        </Button>
      </div>
    </section>
  );
}
