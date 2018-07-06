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
        const secondMessage = "Sorry, I don't have any Swagger docs.";
        const message = `I can do much more than just say 'Welcome!', but I'm trapped in Docker and can't get out!`;
        let count = 0;
        router.get("/more-info", (req, res, next) => {
            if (count % 2 === 0) {
                res.json({
                    message,
                });
            }
            else {
                res.json({
                    message: secondMessage,
                });
            }
            count++;
        });
        this.express.use("/", router);
        this.express.use("/api/v1/hero", HeroRouter_1.default);
    }
}
exports.default = new App().express;
