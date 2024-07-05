import type { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function updateCategory(request: Request, response: Response) {
	const { id } = request.params;

  const { name, icon } = request.body;

  await Category.findByIdAndUpdate(id, { name, icon });

  response.sendStatus(204);
}
