import { NextFunction, Request, Response, Router } from "express";
import { default as nobelPrizedJson } from "./nobelprizes";

const failureRate = 0.3;
const internalServerErrorResponse = {
  message: "Random internal server error.",
};
const internalServerErrorResponse2 = {
  errors: [{ error: "An internal server error occurred." }],
};

const respondWithError = (res) => {
  if (Math.random() < 0.5) {
    return res.status(500).send(internalServerErrorResponse);
  }
  return res.status(500).send(internalServerErrorResponse2);
};

export class NobelPrizeRouter {
  public router: Router;

  /**
   * Initialize the NobelPrizeRouter
   */
  constructor() {
    this.router = Router();
  }

  /**
   * GET all prizes.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    if (Math.random() < failureRate) {
      return respondWithError(res);
    }
    return res.send(nobelPrizedJson);
  }

  /**
   * GET one prize by array index (how dumb!)
   */
  public getOne(req: Request, res: Response, next: NextFunction) {
    const query = parseInt(req.params.arrayIndex, 10);
    const prize = nobelPrizedJson.prizes[query];
    if (Math.random() < failureRate) {
      return respondWithError(res);
    } else if (prize) {
      return res.status(200).send(prize);
    } else {
      return res.status(404).send({
        message: "No nobel prize found with the given array index.",
      });
    }
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

// Create the NobelPrizeRouter, and export its configured Express.Router
const nobelPrizeRoutes = new NobelPrizeRouter();
nobelPrizeRoutes.init();

export default nobelPrizeRoutes.router;
