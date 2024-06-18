import type { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function listOrders(request: Request, response: Response) {
	const orders = await Order.find()
		.sort({ cretedAt: 1 })
		.populate("products.product");

	response.status(200).json(orders);
}
