import { defineField, defineType } from "sanity";

export default defineType({
    name: "titleAndDescription",
    title: "Title And Description",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string"
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "richText"
        }),
        defineField({
            name: "cta",
            title: "CTA",
            type: "customCta"
        })
    ],
    preview: {
        prepare() {
            return {
                title: "Title And Description"
            };
        }
    }
});