class BaseRoute {
  constructor(path, router) {
    this.path = path;
    this.router = router;
  }
  setup() {
    throw new Error("Setup method must be implamented in subclasses");
  }
}
export default BaseRoute;
