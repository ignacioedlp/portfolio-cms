const Media = {
  slug: "media",
  labels: {
    singular: "Media",
    plural: "Media",
  },
  access: {
    read: () => true,
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    mimeTypes: ["image/*", "application/pdf"],
  },
};

export default Media;
