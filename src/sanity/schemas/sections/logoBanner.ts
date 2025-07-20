import { defineField, defineType } from "sanity";

export default defineType({
    title: "Logo Banner",
    name: "logoBanner",
    type: "object",
    fields: [
        defineField({
        title: "Media",
        name: "media",
        type: "media",
        }),
        defineField({
        title: "Caption",
        name: "caption",
        type: "string",
        }),
    ],
    preview: {
        prepare() {
        return {
            title: "Logo Banner"
        };
        }
    }
});