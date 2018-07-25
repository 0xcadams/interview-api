import * as debug from "debug";
import * as http from "http";

import app from "./App";

const port = 3000;
app.set("port", port);

const server = http.createServer(app);
server.listen(port);
server.on("listening", () => debug(`Listening on ${port}`));

module.exports = app;
