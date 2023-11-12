import express from "express";
import cors from "cors";

class Server {
  constructor(options = {}) {
    this.host = options.host;
    this.port = options.port;
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use("/api", options.router);
  }
  async start() {
    return new Promise((resolve, reject) => {
      this.app.listen(this.port, (error) => {
        if (error) reject();
        else {
          console.log(`Server listening on port ${this.port}`);
          resolve();
        }
      });
    });
  }
}

export default Server;
