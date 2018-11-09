import * as functions from "firebase-functions";
import app from "./App";

exports.interview = functions.https.onRequest(app);
