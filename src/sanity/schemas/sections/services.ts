import { defineField, defineType } from "sanity";

export default defineType({
    title: "Services",
    name: "services",
    type: "object",
    fields: [
        defineField({
            title: "Media",
            name: "media",
            type: "media",
        }),
        defineField({
            title: "Title 1",
            name: "title1",
            type: "string",
        }),
        defineField({
            title: "Title 2",
            name: "title2",
            type: "string",
        }),
        defineField({
            name:"services",
            type:"array",
            title:"Services",
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
                            title: "Description 1",
                            name: "desc1",
                            type: "richText",
                        }),
                        defineField({
                            title: "Description 2",
                            name: "desc2",
                            type: "richText",
                        }),
                    ],
                }
            ]
        }),
        defineField({
            title: "Button Label",
            name: "buttonLabel",
            type: "string",
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Services"
            };
        }
    }
});