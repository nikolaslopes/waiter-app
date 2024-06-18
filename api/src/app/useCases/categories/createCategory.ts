import type { Request, Response } from "express";

import { Category } from "../../models/Category";

import type { CategoryDataType } from "../../global/types";

export async function createCategory(request: Request, response: Response) {
	const { name, icon }: CategoryDataType = request.body;

	if (!name) {
		return response.status(400).json({
			error: "Name is required",
		});
	}

	const category = await Category.create({ name, icon });

	response.status(201).json(category);
}
