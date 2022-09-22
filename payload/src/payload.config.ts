import { buildConfig } from "payload/config";
import path from "path";
// import Examples from './collections/Examples';
import Users from "./collections/Users";
import Sites from "./collections/Sites";

export default buildConfig({
  serverURL: "http://localhost:3000",
  cors: "*",
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Sites,

    // Add Collections here
    // Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
