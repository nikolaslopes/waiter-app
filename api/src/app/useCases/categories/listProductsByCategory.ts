import type { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function listProductsByCategory(
	request: Request,
	response: Response,
) {
	const { id } = request.params;

	const products = await Product.find().where("category").equals(id);

	response.status(200).json(products);
}
