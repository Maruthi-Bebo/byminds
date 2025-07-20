import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  groups: [
    {
      name: "metadata",
      title: "Meta data"
    },
    {
      name: "content",
      title: "Content"
    }
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      title: "Make this page the Homepage.",
      name: "isHomePage",
      type: "boolean"
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      description:
        "Create a clean and SEO-friendly URL by clicking 'Generate' to automatically generate a slug based on your title.",
      options: {
        source: "title"
      },
      hidden: ({ parent }) => parent?.homePage == true
    }),
    defineField({
      name: "metaData",
      title: "SEO",
      type: "pageMetaData",
      group: "metadata"
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "content",
      group: "content"
    })
  ],
  preview: {
    select: {
      title: "title"
    }
  }
});
