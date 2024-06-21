import { defineField, defineType } from "sanity";

export default defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  description: "SEO settings for this page",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Used for the <title> tag and the personal website header.",
    }),
    defineField({
      name: "description",
      description:
        "Used both for the <meta> description tag for SEO, and the personal website subheader.",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: "image",
      title: "Open Graph Image",
      type: "image",
      description: "Displayed on social cards and search engine results.",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "No title",
      };
    },
  },
});
