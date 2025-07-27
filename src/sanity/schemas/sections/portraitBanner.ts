import { defineField, defineType } from "sanity";

export default defineType({
    title: "Portrait Banner",
    name: "portraitBanner",
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
        defineField({
            title: "Title",
            name: "title",
            type: "richText",
        }),
        defineField({
            name:"headingAndDesc",
            type:"array",
            title:"Heading and Description",
            of:[
                {
                    type:"object",
                    fields:[
                        defineField({
                            title: "Heading",
                            name: "heading",
                            type: "string",
                        }),
                        defineField({
                            title: "Description",
                            name: "desc",
                            type: "richText",
                        }),
                    ],
                }
            ]
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Portrait Banner"
            };
        }
    }
});