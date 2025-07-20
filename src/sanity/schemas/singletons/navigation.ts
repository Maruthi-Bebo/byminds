import { InsertBelowIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  icon: InsertBelowIcon,
  fields: [
    defineField({
      name: "Field1",
      title: "Field1",
      type: "text"
    }),
    defineField({
      name: "Field2",
      title: "Field2",
      type: "text"
    })
  ],
  preview: {
    prepare() {
      return {
        title: "Navigation"
      };
    }
  }
});
