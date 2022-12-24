import { buildConfig } from "payload/config";
import Proyects from "./collections/Proyects";
import Users from "./collections/Users";
import Media from "./collections/Media";
import Skills from "./collections/Skills";
import InformationUsers from "./collections/InformationUsers";

export default buildConfig({
  serverURL: process.env.URL_DOMAIL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Proyects,
    Skills,
    Media,
    InformationUsers,
    // Add Collections here
    // Examples
  ],
});
