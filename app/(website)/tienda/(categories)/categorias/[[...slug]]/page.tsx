import ListOfProducts from "@/components/store/categories/list-of-products";
import { _generateMetadata } from "@/sanity/lib/utils";
import { generateStaticSlugs } from "@/sanity/loader/generateStaticSlugs";
import {
  loadCategoryBySlug,
  loadProductsByCategory,
} from "@/sanity/loader/loadQuery";
import { Metadata } from "next";
import { Suspense } from "react";

type Props = {
  params: {
    slug: string[];
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: category } = await loadCategoryBySlug(params.slug.join("/"));

  return _generateMetadata({
    title: category?.seo?.title || category?.title,
    description: category?.seo?.description || category?.description,
    image: category?.seo?.image,
  });
}

export async function generateStaticParams() {
  const slugs = await generateStaticSlugs("category");

  return slugs.map((slug) => [slug]);
}

export default async function Page(props: Props) {
  const category = props.params.slug?.join("/") || "";

  const { data: products } = await loadProductsByCategory(category);

  return (
    <>
      {!products.length && (
        <div className="text-center mt-10">
          <h1 className="text-3xl font-semibold">No hay productos</h1>
          <p className="text-lg text-muted-foreground">
            Lo sentimos, no hay productos disponibles en esta categoría.
          </p>
        </div>
      )}

      <Suspense>
        <ListOfProducts products={products} />
      </Suspense>
    </>
  );
}
