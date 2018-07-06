import * as bodyParser from "body-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";

import HeroRouter from "./routes/HeroRouter";

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
    router.get("/more-info", (req, res, next) => {
      res.json({
        message: "I'm trapped in Docker and can't get out!",
      });
    });
    this.express.use("/", router);
    this.express.use("/api/v1/hero", HeroRouter);
  }
}

export default new App().express;
