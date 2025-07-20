import { defineField, defineType } from "sanity";

export default defineType({
  name: "link",
  title: "Link",
  type: "object",
  description:
    "If data is entered into both fields, the first field takes precedence.",
  fields: [
    defineField({
      title: "Select internal link",
      name: "internalLink",
      type: "reference",
      description:
        "This field pertains to links within the pages of the website.",
      to: [{ type: "page" }]
    }),
    defineField({
      title: "External link",
      name: "externalLink",
      type: "url",
      description:
        "External links refer to links that lead outside the website, for example: https://google.com."
    })
  ]
});
