export default function sanityLoader({ src, width, quality }) {
  if (src.startsWith("/")) {
    return src;
  }

  if (src.startsWith("https://cdn.sanity.io/images/")) {
    const url = new URL(src);
    url.searchParams.set("w", width.toString());
    if (quality) {
      url.searchParams.set("q", quality.toString());
    }
    return url.toString();
  }

  const prj = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = "production";
  const url = new URL(`https://cdn.sanity.io/images/${prj}/${dataset}${src}`);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  url.searchParams.set("w", width.toString());
  if (quality) {
    url.searchParams.set("q", quality.toString());
  }
  return url.href;
}
