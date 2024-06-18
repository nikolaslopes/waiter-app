import path from "node:path";

import { Router } from "express";
import multer from "multer";

import CategoryController from "./app/controllers/CategoryController";
import ProductController from "./app/controllers/ProductController";

export const router = Router();

const upload = multer({
	storage: multer.diskStorage({
		destination(request, file, callback) {
			callback(null, path.resolve(__dirname, "..", "uploads"));
		},
		filename(request, file, callback) {
			callback(null, `${Date.now()}-${file.originalname}`);
		},
	}),
});

// Categories
router.get("/categories", CategoryController.index);
router.post("/categories", CategoryController.store);

// Products
router.get("/products", ProductController.index);
router.post("/products", upload.single("image"), ProductController.store);

// Get products by category
router.get("/categories/:id/products", (req, res) => {
	res.send("OK");
});

// List orders
router.get("/orders", (req, res) => {
	res.send("OK");
});

// Create order
router.post("/orders", (req, res) => {
	res.send("OK");
});

// Change order status
router.patch("/orders/:id", (req, res) => {
	res.send("OK");
});

// Delete/cancel order
router.delete("/orders/:id", (req, res) => {
	res.send("OK");
});
