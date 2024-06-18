import { Router } from "express";

import CategoryController from "./app/controllers/CategoryController";

export const router = Router();

// Categories
router.get("/categories", CategoryController.index);
router.post("/categories", CategoryController.store);

// List products
router.get("/products", (req, res) => {
	res.send("OK");
});

// Create product
router.post("/products", (req, res) => {
	res.send("OK");
});

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
