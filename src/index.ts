import * as debug from "debug";
import * as http from "http";

import app from "./App";

const port = process.env.PORT || 3000;
app.set("port", port);

const server = http.createServer(app);
server.listen(port);
server.on("listening", onListening);

function onListening(): void {
  const addr = server.address();
  const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}
