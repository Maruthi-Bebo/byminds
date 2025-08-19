import { defineField, defineType } from "sanity";

export default defineType({
    title: "Team",
    name: "team",
    type: "object",
    fields: [
        defineField({
            title: "Title",
            name: "title",
            type: "string",
        }),
        defineField({
            title: "Intro Image",
            name: "introImage",
            type: "image",
        }),
        defineField({
            title: "Intro Text",
            name: "introText",
            type: "richText",
        }),

        defineField({
            name:"members",
            type:"array",
            title:"Members",
            of:[
                {
                    type:"object",
                    fields:[
                        defineField({
                            title: "First Name",
                            name: "firstName",
                            type: "string",
                        }),
                        defineField({
                            title: "Last Name",
                            name: "lastName",
                            type: "string",
                        }),
                        defineField({
                            title: "Role",
                            name: "role",
                            type: "string",
                        }),
                        defineField({
                            title: "Image",
                            name: "image",
                            type: "image",
                        }),
                        defineField({
                            title: "About",
                            name: "about",
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
                title: "Team"
            };
        }
    }
});