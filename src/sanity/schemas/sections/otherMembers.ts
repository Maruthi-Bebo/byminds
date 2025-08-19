import { defineField, defineType } from "sanity";

export default defineType({
    title: "Other Members",
    name: "otherMembers",
    type: "object",
    fields: [
        defineField({
            name:"members",
            type:"array",
            title:"Members",
            of:[
                {
                    type:"object",
                    fields:[
                        defineField({
                            title: "Name",
                            name: "name",
                            type: "string",
                        }),
                        defineField({
                            title: "Role",
                            name: "role",
                            type: "string",
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
                title: "Other Members"
            };
        }
    }
});