import BaseRoute from "./base-router.js";
import UserController from "../controllers/users-controller.js";

class UserRoute extends BaseRoute {
  constructor(path, router) {
    super(path, router);
  }
  setup() {
    this.router.get(this.path, UserController.getUsers);
    this.router.post(this.path, UserController.createUser);
  }
}

export default UserRoute;
