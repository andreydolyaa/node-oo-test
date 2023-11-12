import { Users } from "../schemas/user-schema.js";

class UserController {
  static async getUsers(req, res) {
    try {
      const users = await Users.find({});
      res.send(users).status(200);
    } catch (error) {
      res.sendStatus(400);
    }
  }
  static async createUser(req, res) {
    try {
      const { userName } = req.body;
      await Users.create({ userName });
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(400);
    }
  }
}

export default UserController;
