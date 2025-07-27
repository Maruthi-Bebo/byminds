import { defineField, defineType } from "sanity";

export default defineType({
    title: "Our Work Listing",
    name: "ourWorkListing",
    type: "object",
    fields: [
        defineField({
            title: "Title",
            name: "title",
            type: "richText",
        }),
        defineField({
            title: "Caption",
            name: "caption",
            type: "string",
        }),
        defineField({
            name:"caseStudies",
            type:"array",
            title:"Case Studies",
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
                            title: "Caption",
                            name: "caption",
                            type: "string",
                        }),
                        defineField({
                            name:"roles",
                            type:"array",
                            title:"Roles",
                            of:[
                                {
                                    type:"object",
                                    fields:[
                                        defineField({
                                            title: "Role Name",
                                            name: "roleName",
                                            type: "string",
                                        }),
                                        defineField({
                                            title: "Person Name",
                                            name: "personName",
                                            type: "string",
                                        }),
                                    ],
                                }
                            ]
                        }),
                        defineField({
                            title: "About Label",
                            name: "aboutLabel",
                            type: "string",
                        }),
                        defineField({
                            title: "About Content",
                            name: "aboutContent",
                            type: "text",
                        }),
                        defineField({
                            title: "Impact Label",
                            name: "impactLabel",
                            type: "string",
                        }),
                        defineField({
                            title: "About Content",
                            name: "impactContent",
                            type: "text",
                        }),
                        defineField({
                            name:"images",
                            type:"array",
                            title:"Images",
                            of:[
                                {
                                    type:"object",
                                    fields:[
                                        defineField({
                                            title: "Image",
                                            name: "image",
                                            type: "media",
                                        }),
                                    ],
                                    preview: {
                                        prepare() {
                                            return {
                                                title: "Image"
                                            };
                                        }
                                    }
                                }
                            ]
                        }),
                        defineField({
                            title: "Link",
                            name: "link",
                            type: "link",
                        }),
                    ],
                }
            ]
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Our Work Listing"
            };
        }
    }
});
