import { BookOpenIcon } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "bestSeller",
  title: "Best Seller",
  type: "document",
  icon: BookOpenIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
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
        title: "Best Seller",
      };
    },
  },
});
