import {NextFunction, Request, Response, Router} from "express";
import * as data from "./data.json";

export class HeroRouter {
  public router: Router;

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Heroes.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(data);
  }

  /**
   * GET one hero by id
   */
  public getOne(req: Request, res: Response, next: NextFunction) {
    const query = parseInt(req.params.id, 10);
    const hero = data.find((h) => h.id === query);
    if (hero) {
      res.status(200)
        .send({
          hero,
          message: "Success",
          status: res.status,
        });
    } else {
      res.status(404)
        .send({
          message: "No hero found with the given id.",
          status: res.status,
        });
    }
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  public init() {
    this.router.get("/", this.getAll);
    this.router.get("/:id", this.getOne);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const heroRoutes = new HeroRouter();
heroRoutes.init();

export default heroRoutes.router;
