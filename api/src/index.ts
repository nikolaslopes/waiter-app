import path from "node:path";
import http from "node:http";
import express from "express";
import mongoose from "mongoose";
import "express-async-errors";
import { Server } from "socket.io";

import { router } from "./router";
import { errorHandler } from "./app/middlewares/errorHandler";

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose
	.connect("mongodb://localhost:27017")
	.then(() => {
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

		server.listen(port, () => {
			console.log(`🔥 Server is running on http://localhost:${port}`);
		});
	})
	.catch(() => console.log("error on connect"));
