import path from "node:path";

import { Router } from "express";
import multer from "multer";

import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategory } from "./app/useCases/categories/createCategory";
import { listProducts } from "./app/useCases/products/listProducts";
import { createProduct } from "./app/useCases/products/createProduct";
import { listProductsByCategory } from "./app/useCases/categories/listProductsByCategory";

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
router.get("/categories", listCategories);
router.post("/categories", createCategory);
router.get("/categories/:id/products", listProductsByCategory);

// Products
router.get("/products", listProducts);
router.post("/products", upload.single("image"), createProduct);

// Orders
router.get("/orders", (req, res) => {
	res.send("OK");
});
router.post("/orders", (req, res) => {
	res.send("OK");
});
router.patch("/orders/:id", (req, res) => {
	res.send("OK");
});
router.delete("/orders/:id", (req, res) => {
	res.send("OK");
});
