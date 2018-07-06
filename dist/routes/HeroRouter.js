"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data = require("./data.json"); // tslint:disable-line
class HeroRouter {
    /**
     * Initialize the HeroRouter
     */
    constructor() {
        this.router = express_1.Router();
    }
    /**
     * GET all Heroes.
     */
    getAll(req, res, next) {
        return res.send(data);
    }
    /**
     * GET one hero by id
     */
    getOne(req, res, next) {
        const query = parseInt(req.params.id, 10);
        const hero = data.heroes.find((h) => h.id === query);
        if (hero) {
            return res.status(200).send({
                hero,
                status: res.status,
            });
        }
        else {
            return res.status(404).send({
                message: "No hero found with the given id.",
                status: res.status,
            });
        }
    }
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get("/", this.getAll);
        this.router.get("/:id", this.getOne);
    }
}
exports.HeroRouter = HeroRouter;
// Create the HeroRouter, and export its configured Express.Router
const heroRoutes = new HeroRouter();
heroRoutes.init();
exports.default = heroRoutes.router;
