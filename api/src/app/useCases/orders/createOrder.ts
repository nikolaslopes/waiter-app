import type { Request, Response } from "express";

import { Order } from "../../models/Order";

import type { OrderDataType } from "../../global/types";
import { io } from "../../..";

export async function createOrder(request: Request, response: Response) {
	const { table, products }: OrderDataType = request.body;

	const order = await Order.create({
		table,
		products,
	});
	const orderDetails = await order.populate("products.product");

	io.emit("orders@new", orderDetails);

	response.status(201).json(order);
}
