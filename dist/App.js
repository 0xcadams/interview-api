"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const logger = require("morgan");
const HeroRouter_1 = require("./routes/HeroRouter");
// Creates and configures an ExpressJS web server.
class App {
    // Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(logger("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure API endpoints.
    routes() {
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
        this.express.use("/api/v1/hero", HeroRouter_1.default);
    }
}
exports.default = new App().express;
