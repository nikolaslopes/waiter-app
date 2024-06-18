import type { Request, Response } from "express";

import CategoriesRepository from "../repositories/CategoriesRepository";

import type { ICategory } from "../types/categoriesTypes";

class CategoryController {
	async index(request: Request, response: Response) {
		const categories = await CategoriesRepository.findAll();

		response.json(categories);
	}

	async store(request: Request, response: Response) {
		const { name, icon }: ICategory = request.body;

		const category = await CategoriesRepository.create({ name, icon });

		response.status(201).json(category);
	}
}

export default new CategoryController();
