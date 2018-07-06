"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require("debug");
const http = require("http");
const App_1 = require("./App");
const port = process.env.PORT || 3000;
App_1.default.set("port", port);
const server = http.createServer(App_1.default);
server.listen(port);
server.on("listening", onListening);
function onListening() {
    const addr = server.address();
    const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}
