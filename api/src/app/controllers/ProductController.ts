import type { Request, Response } from "express";

import ProductsRepository from "../repositories/ProductsRepository";

import type { IProductData } from "../types/productTypes";

class ProductController {
	async index(request: Request, response: Response) {
		const products = await ProductsRepository.findAll();

		response.json(products);
	}

	async store(request: Request, response: Response) {
		const imagePath = request.file?.filename;

		const { name, description, price, ingredients, category }: IProductData =
			request.body;

		const product = await ProductsRepository.create({
			name,
			description,
			imagePath,
			price: Number(price),
			ingredients: ingredients ? JSON.parse(ingredients) : [],
			category,
		});

		response.status(201).json(product);
	}
}

export default new ProductController();
