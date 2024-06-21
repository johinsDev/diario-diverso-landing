import { groq } from "next-sanity";

export const productsQuery = groq`
  *[_type == "product"] {
    _id,
    title,
    "slug": slug.current,
    price,
    description,
    highlightInHome,
    category[]->{
      ...,
      "slug": slug.current,
    },
    gallery{
        ...,
        images[]{
          ...,
          asset->{
            ...,
            "_ref": _id,
          },
        },
      },
    seo,
  }
`;

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    price,
    description,
    highlightInHome,
    category[]->{
      ...,
      "slug": slug.current,
    },
    gallery{
        ...,
        images[]{
          ...,
          asset->{
            ...,
            "_ref": _id,
          },
        },
      },
    seo,
  }
`;

export const productByCategoryQuery = groq`
  *[_type == "product" && $categorySlug in category[]->slug.current] {
    _id,
    title,
    "slug": slug.current,
    price,
    description,
    highlightInHome,
    category[]->{
      ...,
      "slug": slug.current,
    },
    gallery{
        ...,
        images[]{
          ...,
          asset->{
            ...,
            "_ref": _id,
          },
        },
      },
    seo,
  }
`;

export const queryCategories = groq`
  *[_type == "category"]{
    ...,
    _id,
    title,
    "slug": slug.current,
    seo,
  }
`;

export const queryCategoryBySlug = groq`
  *[_type == "category" && slug.current == $slug]{
    ...,
    _id,
    title,
    "slug": slug.current,
    seo,
  }
`;
