import BaseRoute from "./base-router.js";
import JobsController from "../controllers/jobs-controller.js";

class JobsRoute extends BaseRoute {
  constructor(path, router) {
    super(path, router);
  }
  setup() {
    this.router.get(this.path, JobsController.getJobs);
  }
}

export default JobsRoute;
