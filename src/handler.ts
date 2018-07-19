import * as handler from "serverless-express/handler";
import * as app from "./App";

exports.handler = handler(app.default);
