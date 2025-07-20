import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageMetaData",
  title: "Page meta data",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text"
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      description:
        "Displayed on social cards and search engine results. It is recommended that image should have dimensions of at least 1,200 x 630 pixels, while keeping the file size under 8 MB.",
      type: "image"
    }),
    defineField({
      name: "metadataBase",
      title: "Metadata Base Url",
      description:
        "Used to generate fully qualified urls for url based meta datas",
      type: "url"
    })
  ]
});
