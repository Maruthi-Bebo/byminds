import { defineField, defineType } from "sanity";
import { InsertAboveIcon } from "@sanity/icons";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  icon: InsertAboveIcon,
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
        title: "Footer"
      };
    }
  }
});
