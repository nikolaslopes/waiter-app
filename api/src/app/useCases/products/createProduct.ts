import type { Request, Response } from "express";

import { Product } from "../../models/Product";

import type { ProductDataType } from "../../global/types";

export async function createProduct(request: Request, response: Response) {
	const imagePath = request.file?.filename;
	const { name, description, price, ingredients, category }: ProductDataType =
		request.body;

	const product = await Product.create({
		name,
		description,
		imagePath,
		price: Number(price),
		ingredients: ingredients ? JSON.parse(ingredients) : [],
		category,
	});

	response.status(201).json(product);
}
