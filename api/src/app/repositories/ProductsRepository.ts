import { Product } from "../models/Product";

import type { IProductRepository } from "../types/productTypes";

class ProductRepository {
	async findAll() {
		const rows = await Product.find();

		return rows;
	}

	async create({
		name,
		description,
		imagePath,
		price,
		category,
		ingredients,
	}: IProductRepository) {
		const row = await Product.create({
			name,
			description,
			imagePath,
			price,
			category,
			ingredients,
		});

		return row;
	}
}

export default new ProductRepository();
