import { Category } from "../models/Category";

import type { ICategory } from "../types/categoryTypes";

class CategoriesRepository {
	async findAll() {
		const categories = await Category.find();

		return categories;
	}

	async create({ name, icon }: ICategory) {
		const category = await Category.create({ name, icon });

		return category;
	}
}

export default new CategoriesRepository();
