import path from "node:path";
import express from "express";
import mongoose from "mongoose";
import "express-async-errors";

import { router } from "./router";
import { errorHandler } from "./app/middlewares/errorHandler";

mongoose
	.connect("mongodb://localhost:27017")
	.then(() => {
		const app = express();
		const port = 8080;

		app.use((request, response, next) => {
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.setHeader("Access-Control-Allow-Methods", "*");
			response.setHeader("Access-Control-Allow-Headers", "*");

			next();
		});
		app.use(
			"/uploads",
			express.static(path.resolve(__dirname, "..", "uploads")),
		);
		app.use(express.json());
		app.use(router);
		app.use(errorHandler);

		app.listen(port, () => {
			console.log(`🔥 Server is running on http://localhost:${port}`);
		});
	})
	.catch(() => console.log("error on connect"));
