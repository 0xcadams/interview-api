import handler from "serverless-express/handler";
import app from "./src/App";

exports.handler = handler(app);
