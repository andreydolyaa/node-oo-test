import { Jobs } from "../schemas/jobs-schema.js";

class JobsController {
  static async getJobs(req, res) {
    try {
      const jobs = await Jobs.find({});
      res.send(jobs).status(200);
    } catch (error) {
      res.sendStatus(400);
    }
  }
}

export default JobsController;
