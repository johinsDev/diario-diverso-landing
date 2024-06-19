import ListOfProducts from "@/components/store/categories/list-of-products";
import { PRODUCTS } from "@/constants";

type Props = {
  params: {
    slug: string[];
  };
};

export default function Page(props: Props) {
  const category = props.params.slug?.join("/") || "";

  const products = category
    ? PRODUCTS.filter((product) => product.category.slug === category)
    : PRODUCTS;

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

      <ListOfProducts products={products} />
    </>
  );
}
