import { Categories } from "@/components/blog/categories";
import { CustomPortableText } from "@/components/shared/custom-portable-text";
import { Post } from "@/components/shared/post";
import { _generateMetadata, urlForImage } from "@/sanity/lib/utils";
import { generateStaticSlugs } from "@/sanity/loader/generateStaticSlugs";
import {
  loadCategoriesPosts,
  loadLastPosts,
  loadPostBySlug,
  loadSimilarPosts,
} from "@/sanity/loader/loadQuery";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: post } = await loadPostBySlug(params.slug);

  return _generateMetadata({
    title: post?.seo?.title || post?.title,
    description: post?.seo?.description || post?.content,
    image: post?.seo?.image || post.image,
  });
}

export async function generateStaticParams() {
  const slugs = await generateStaticSlugs("post");

  return slugs.map((slug) => [slug]);
}

export default async function BlogDetailPage({ params }: Props) {
  const { data } = await loadPostBySlug(params.slug);

  const [categories, _lastPost, similarPost] = await Promise.all([
    loadCategoriesPosts(),
    loadLastPosts(),
    loadSimilarPosts(data.category._id, data.slug),
  ]);

  const lastPost = _lastPost.data.filter((post) => post._id !== data._id) || [];

  const otherPosts = [...similarPost.data, ...lastPost]
    .filter(
      (post, index, self) =>
        self.findIndex((p) => p._id === post._id) === index,
    )
    .slice(0, 3);

  if (!data) {
    return notFound();
  }

  const imageUrl = urlForImage(data.image)?.width(1200).url();

  return (
    <main className="flex-1 flex flex-col gap-12 container py-4 md:py-10">
      <div className="flex w-full gap-12">
        <div className="hidden lg:block w-1/3 xl:w-1/4">
          <div className="bg-muted p-4 rounded-md">
            <div className="flex gap-2 items-center">
              <div className="bg-primary w-8 rounded-md h-1" />
              <div className="text-2xl font-bold capitalize">Categorias</div>
            </div>

            <Categories categories={categories.data} />
          </div>
        </div>

        <div className="w-full lg:w-2/3 xl:w-3/4">
          <h1 className="text-2xl leading-snug md:leading-snug md:text-3xl lg:leading-snug lg:text-4xl xl:text-5xl xl:leading-snug mx-auto text-left">
            {data.title}
          </h1>

          <p className="text-sm text-primary mb-4">
            {/* format daate to LLLL, MMMM Do, YYYY */}
            {new Date(data.date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          {imageUrl && (
            <Image
              src={imageUrl}
              alt={`Image for ${data.title} post`}
              width={1200}
              height={600}
              className="rounded-lg mt-10 aspect-video lg:aspect-[21/9] w-full object-cover object-top"
              placeholder="blur"
              blurDataURL={data.image?.asset.metadata.lqip}
              sizes="(min-width: 1024px) 1200px, 100vw"
            />
          )}

          <div className="prose text-lg md:text-xl mt-10 max-w-fit">
            <CustomPortableText value={data.content} />
          </div>
        </div>
      </div>

      {!!otherPosts.length && (
        <section className="w-full justify-center text-center mt-8">
          {/* more blogs */}
          <h2 className="md:text-4xl font-bold text-lg">
            Articulos relacionados
          </h2>

          <div className="w-full  grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
            {otherPosts.map((post) => (
              <Post key={post._id} post={post} />
            ))}
          </div>

          <Link href="/blog" className="text-primary hover:underline">
            Ver todos los articulos
          </Link>
        </section>
      )}
    </main>
  );
}
