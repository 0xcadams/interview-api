import * as bodyParser from "body-parser";
import * as express from "express";
import * as logger from "morgan";

import StartupRouter from "./routes/StartupRouter";

// Creates and configures an ExpressJS web server.
class App {
  // ref to Express instance
  public express: express.Application;

  // Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger("dev"));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    const router = express.Router();
    // root handlers
    router.get("/", (req, res, next) => {
      res.json({
        href: "/more-info",
        message: "Welcome!",
      });
    });

    // messages to display to the user at /more-info
    const message = "I can do much more than just say 'Welcome!', but I'm trapped in Docker and can't get out!";
    const secondMessage = "Sorry, I don't have any Swagger docs, but I am running in Node.";

    let count = 0;

    router.get("/more-info", (req, res, next) => {
      if (count % 2 === 0) {
        res.json({
          message,
        });
      } else {
        res.json({
          message: secondMessage,
        });
      }
      count++;
    });
    this.express.use("/", router);
    this.express.use("/api/v1/startup", StartupRouter);
  }
}

export default new App().express;
