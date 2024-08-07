import path from "node:path";

import { Router } from "express";
import multer from "multer";

import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategories } from "./app/useCases/categories/listCategories";
import { listProductsByCategory } from "./app/useCases/categories/listProductsByCategory";

import { createProduct } from "./app/useCases/products/createProduct";
import { deleteProducts } from "./app/useCases/products/deleteProduct";
import { listProducts } from "./app/useCases/products/listProducts";

import { updateCategory } from "./app/useCases/categories/updateCategory";
import { cancelOrder } from "./app/useCases/orders/cancelOrder";
import { changeOrderStatus } from "./app/useCases/orders/changeOrderStatus";
import { createOrder } from "./app/useCases/orders/createOrder";
import { listOrders } from "./app/useCases/orders/listOrders";

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
router.patch("/categories/:id", updateCategory);

// Products
router.get("/products", listProducts);
router.post("/products", upload.single("image"), createProduct);
router.delete("/products/:id", deleteProducts);

// Orders
router.get("/orders", listOrders);
router.post("/orders", createOrder);
router.patch("/orders/:id", changeOrderStatus);
router.delete("/orders/:id", cancelOrder);
