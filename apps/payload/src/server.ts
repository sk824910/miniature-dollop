// import * as express from "express";
// import payload from "payload";
// import { env } from "process";
// // console.log(env);

// const app = express();
// const secret = env["PAYLOAD_SECRET_KEY"] ? env["PAYLOAD_SECRET_KEY"] : "";
// const url = env["MONGO_URL"] ? env["MONGO_URL"] : "";
// console.log(secret, url);

// const start = async () => {
//   await payload.init({
//     secret: "secret",
//     mongoURL: "mongodb://10.0.0.226:27017/payload-nextjs-site",
//     express: app,
//   });

//   app.listen(3000, async () => {
//     console.log(
//       "Express is now listening for incoming connections on port 3000."
//     );
//   });
// };

// start();

import express from "express";
import payload from "payload";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const secret = !process.env?.["PAYLOAD_SECRET"]
  ? ""
  : process.env?.["PAYLOAD_SECRET"];
const mongo = !process.env?.["MONGODB_URI"] ? "" : process.env?.["MONGODB_URI"];

//todo
// need to add payload deploy plan
// need to figure out arch for this project
// maybe ec2 for payload backend? s3 for frontend?

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: secret,
    mongoURL: mongo,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(3000);
};

start();
