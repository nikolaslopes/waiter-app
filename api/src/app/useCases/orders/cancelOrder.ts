import type { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function cancelOrder(request: Request, response: Response) {
	const { id } = request.params;

	await Order.findByIdAndDelete(id);

	response.sendStatus(204);
}
