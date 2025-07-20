import { LinkIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  name: "richText",
  type: "array",
  title: "Rich text",
  of: [
    {
      type: "block",
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" }
        ],
        annotations: [
          {
            name: "referenceLink",
            type: "link",
            title: "Link",
            icon: LinkIcon,
            description:
              "If data is entered into both fields, the first field takes precedence."
          }
        ]
      }
    }
  ]
});
