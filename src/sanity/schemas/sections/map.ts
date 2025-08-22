import { defineField, defineType } from "sanity";

export default defineType({
    title: "Map",
    name: "map",
    type: "object",
    fields: [
        defineField({
            title: "Title",
            name: "title",
            type: "string",
        }),
    ],
    preview: {
        prepare() {
        return {
            title: "Map"
        };
        }
    }
});