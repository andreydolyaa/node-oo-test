import express from "express";
import Server from "./core/server.js";
import { connectToDb } from "./core/db.js";
import UserRoute from "./routers/users-router.js";
import JobsRoute from "./routers/jobs-router.js";
import env from "./core/env.js";

const router = express.Router();

// init
const userRoute = new UserRoute("/users", router);
const jobsRoute = new JobsRoute("/jobs", router);

userRoute.setup();
jobsRoute.setup();

const server = new Server({
  port: env.PORT,
  host: env.HOST,
  router,
});

server.start()
  .then(connectToDb);
