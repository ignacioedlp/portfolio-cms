const InformationUsers = {
  slug: "informationUsers",
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
  },
  labels: {
    singular: "InformationUser",
    plural: "InformationUsers",
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: "education", // required
      type: "array", // required
      labels: {
        singular: "Education",
        plural: "Educations",
      },
      fields: [
        // required
        {
          name: "site",
          type: "text",
        },
        {
          name: "asignature",
          type: "text",
        },
        {
          name: "dateRange",
          type: "text",
        },
      ],
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "age",
      type: "number",
    },
    {
      name: "email",
      type: "text",
    },
    {
      name: "state",
      type: "text",
    },
    {
      name: "phone",
      type: "text",
    },
    {
      name: "linkedin",
      type: "text",
    },
    {
      name: "instagram",
      type: "text",
    },
    {
      name: "github",
      type: "text",
    },
    {
      name: "cv_spanish",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "cv_english",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default InformationUsers;
