import type { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function deleteProducts(request: Request, response: Response) {
	const { id } = request.params;

	await Product.findByIdAndDelete(id);

	response.sendStatus(204);
}
