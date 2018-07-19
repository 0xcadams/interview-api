import handler from "serverless-express/handler";
import app from "./App";

exports.handler = handler(app);
