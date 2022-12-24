const Proyects = {
  slug: "proyects",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  labels: {
    singular: "Proyect",
    plural: "Proyects",
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "url_github",
      type: "text",
    },
    {
      name: "url_proyect",
      type: "text",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "techs", // required
      type: "select", // required
      hasMany: true,
      admin: {
        isClearable: true,
        isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
      },
      options: [
        {
          label: "NextJs",
          value: "next_js",
        },
        {
          label: "Tailwind CSS",
          value: "tailwind_css",
        },
        {
          label: "NextAuth",
          value: "next_auth",
        },
        {
          label: "PostgreSQL",
          value: "postgreSQL",
        },
        {
          label: "MongoDB",
          value: "mongoDB",
        },
        {
          label: "Javascript",
          value: "javascript",
        },
        {
          label: "Bootstrap",
          value: "bootstrap",
        },
        {
          label: "Laravel",
          value: "laravel",
        },
        {
          label: "PHP",
          value: "php",
        },
        {
          label: "React",
          value: "react",
        },
        {
          label: "Sanity",
          value: "sanity",
        },
        {
          label: "Thirdweb",
          value: "thirdweb",
        },
        {
          label: "Solidity",
          value: "solidity",
        },
        {
          label: "Hardhat",
          value: "hardhat",
        },
        {
          label: "MySQL",
          value: "mysql",
        },
      ],
    },
  ],
};

export default Proyects;
