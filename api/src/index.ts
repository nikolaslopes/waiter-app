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

		app.use(express.json());
		app.use(router);
		app.use(errorHandler);

		app.listen(port, () => {
			console.log(`🔥 Server is running on http://localhost:${port}`);
		});
	})
	.catch(() => console.log("error on connect"));
