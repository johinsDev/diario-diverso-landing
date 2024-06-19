import ListOfProducts from "@/components/store/categories/list-of-products";
import { PRODUCTS } from "@/constants";

export default function Page() {
  return <ListOfProducts products={PRODUCTS} />

}
