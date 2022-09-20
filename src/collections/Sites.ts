import { CollectionConfig } from "payload/types";

const Sites: CollectionConfig = {
  slug: "sites",
  admin: {
    useAsTitle: "email",
    description: "some description here",
    hideAPIURL: true,
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: "Last Name",
      type: "text",
    },
    {
      name: "total",
      type: "number",
      required: true,
    },
    {
      name: "placedBy",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
  ],
};

export default Sites;
