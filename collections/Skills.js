const Skills = {
  slug: "skills",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  labels: {
    singular: "Skill",
    plural: "Skills",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "category", // required
      type: "select", // required
      hasMany: false,
      admin: {
        isClearable: true,
        isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
      },
      options: [
        {
          label: "Blockchain",
          value: "blockchain",
        },
        {
          label: "Frontend",
          value: "frontend",
        },
        {
          label: "Backend",
          value: "backend",
        },
        {
          label: "Database",
          value: "database",
        },
        {
          label: "Extras",
          value: "extras",
        },
      ],
    },
  ],
};

export default Skills;
