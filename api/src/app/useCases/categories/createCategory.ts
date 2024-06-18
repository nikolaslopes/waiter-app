import type { Request, Response } from "express";

import { Category } from "../../models/Category";

import type { ICategoryData } from "../../types/categoryTypes";

export async function createCategory(request: Request, response: Response) {
	const { name, icon }: ICategoryData = request.body;

	if (!name) {
		return response.status(400).json({
			error: "Name is required",
		});
	}

	const category = await Category.create({ name, icon });

	response.status(201).json(category);
}
