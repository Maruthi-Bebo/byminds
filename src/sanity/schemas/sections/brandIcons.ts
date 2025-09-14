import { defineField, defineType } from "sanity";

export default defineType({
    title: "Brand Icons",
    name: "brandIcons",
    type: "object",
    fields: [
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
            title: "Description",
            name: "description",
            type: "richText",
        }),
        defineField({
            name:"icons",
            type:"array",
            title:"Icons",
            of:[
                {
                    type:"object",
                    fields:[
                        defineField({
                            title: "Icon",
                            name: "icon",
                            type: "image",
                        }),
                        defineField({
                            title: "Mobile Icon",
                            name: "mobileIcon",
                            type: "image",
                            description: "If mobile icon is not added, by default desktop icon will be picked."
                        }),
                    ],
                }
            ]
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Brand Icons"
            };
        }
    }
});
