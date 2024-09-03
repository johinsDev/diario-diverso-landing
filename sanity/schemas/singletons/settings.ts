// settings of the site (title, description, SEOm hero banner, etc)
import { defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: () => "⚙️",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "image",
    }),
    defineField({
      name: "heroMobile",
      title: "Hero mobile",
      type: "image",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Settings",
      };
    },
  },
});
