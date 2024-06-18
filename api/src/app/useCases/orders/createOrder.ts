import type { Request, Response } from "express";

import { Order } from "../../models/Order";

import type { OrderDataType } from "../../global/types";

export async function createOrder(request: Request, response: Response) {
	const { table, products }: OrderDataType = request.body;

	const order = await Order.create({
		table,
		products,
	});

	response.status(201).json(order);
}
