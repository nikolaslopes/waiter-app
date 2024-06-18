import type { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function listProducts(request: Request, response: Response) {
	const products = await Product.find();

	response.json(products);
}
