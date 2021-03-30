export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "place",
      type: "string",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "projectType",
      title: "Project type",
      type: "string",
      options: {
        list: [
          { value: "personal", title: "personal" },
          { value: "client", title: "Client" },
          { value: "uni", title: "Uni" },
          { value: "onlineCourse", title: "Online course" },
        ],
      },
    },
    {
      name: "frameworks",
      title: "Frameworks/ Languages",
      type: "text",
    },
    {
      name: "link",
      type: "url",
    },
    {
      name: "sourceCode",
      tile: "Link to Source Code",
      type: "url",
    },
    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
};
