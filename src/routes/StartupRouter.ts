import { NextFunction, Request, Response, Router } from "express";
const startupsJson = require("./startups.json"); // tslint:disable-line

const failureRate = 0.3;
const internalServerErrorResponse = {
  message: "Random internal server error."
};
const internalServerErrorResponse2 = {
  errors: [{ error: "An internal server error occurred." }]
};

export class StartupRouter {
  public router: Router;

  /**
   * Initialize the StartupRouter
   */
  constructor() {
    this.router = Router();
  }

  /**
   * GET all startups.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    if (Math.random() < failureRate) {
      return this.respondWithError(res);
    }
    return res.send(startupsJson);
  }

  /**
   * GET one startup by array index (how dumb!)
   */
  public getOne(req: Request, res: Response, next: NextFunction) {
    const query = parseInt(req.params.arrayIndex, 10);
    const startup = startupsJson.startups[query];
    if (Math.random() < failureRate) {
      return this.respondWithError(res);
    } else if (startup) {
      return res.status(200).send(startup);
    } else {
      return res.status(404).send({
        message: "No startup found with the given array index."
      });
    }
  }

  private respondWithError(res) {
    if (Math.random() < 0.5) {
      return res.status(500).send(internalServerErrorResponse);
    }
    return res.status(500).send(internalServerErrorResponse2);
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  public init() {
    this.router.get("/", this.getAll);
    this.router.get("/:arrayIndex", this.getOne);
  }
}

// Create the StartupRouter, and export its configured Express.Router
const startupRoutes = new StartupRouter();
startupRoutes.init();

export default startupRoutes.router;
