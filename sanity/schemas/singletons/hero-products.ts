import { HomeIcon } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "heroProducts",
  title: "Hero Products",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [defineArrayMember({ type: "homeProduct" })],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Hero Products",
      };
    },
  },
});
