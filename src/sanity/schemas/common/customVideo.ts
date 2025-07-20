import { defineField, defineType } from "sanity";

export default defineType({
  title: "Video",
  name: "customVideo",
  type: "object",
  description: "Please upload videos in the MP4 format.",
  fields: [
    defineField({
      name: "desktopVideo",
      title: "Desktop Video",
      type: "object",
      fields: [
        defineField({
          name: "videoFile",
          title: "Video File",
          type: "file",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "width",
          title: "Width",
          type: "number",
        }),
        defineField({
          name: "height",
          title: "Height",
          type: "number",
        })
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mobileVideo",
      title: "Mobile Video",
      type: "object",
      fields: [
        defineField({
          name: "videoFile",
          title: "Video File",
          type: "file",
          description:
            "If you don't upload a mobile video, the frontend display the cropped desktop video.",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "width",
          title: "Width",
          type: "number"
        }),
        defineField({
          name: "height",
          title: "Height",
          type: "number"
        })
      ]
    }),
    defineField({
      name: "showMuteIcon",
      type: "boolean",
      title: "Show mute icon"
    })
  ],
  preview: {
    prepare() {
      return {
        title: "Video"
      };
    }
  }
});