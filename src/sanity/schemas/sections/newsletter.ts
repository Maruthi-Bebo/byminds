import { defineField, defineType } from "sanity";

export default defineType({
    title: "Newsletter",
    name: "newsletter",
    type: "object",
    fields: [
        defineField({
            title: "Title",
            name: "title",
            type: "string",
        }),
        defineField({
            title: "Heading",
            name: "heading",
            type: "string",
        }),
    ]
});