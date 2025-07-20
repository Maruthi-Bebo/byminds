import { defineField, defineType } from "sanity";

export default defineType({
  title: "CTA",
  name: "customCta",
  type: "object",
  fields: [
    defineField({
      title: "CTA label",
      name: "ctaLabel",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "CTA link",
      name: "ctaLink",
      type: "link",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "CTA colour",
      name: "ctaColour",
      type: "string",
      options: {
        list: [
          { title: "Black", value: "black" },
          { title: "White", value: "white" }
        ]
      }
    })
  ],
  options: {
    collapsed: false
  }
});