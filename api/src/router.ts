import { Router } from "express";
import { listCategories } from "./app/useCases/categories/listCategories";

export const router = Router();

// List categories
router.get("/categories", listCategories);

// Create category
router.post("/categories", (req, res) => {
	res.send("OK");
});

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
