import { defineField, defineType } from "sanity";

export default defineType({
  name: "media",
  title: "Media",
  type: "object",
  fields: [
    defineField({
      name: "mediaType",
      title: "Media type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" }
        ],
        layout: "radio"
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "customImage",
      hidden: ({ parent }) =>
        !parent?.mediaType || parent?.mediaType == "video"
    }),
    defineField({
      name: "video",
      title: "Video",
      type: "customVideo",
      hidden: ({ parent }) =>
        !parent?.mediaType || parent?.mediaType == "image"
    })
  ],
  preview: {
    prepare() {
      return {
        title: "Media"
      };
    }
  }
});
