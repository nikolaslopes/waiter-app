import type { Request, Response } from "express";

import { Order } from "../../models/Order";

import { ORDER_STATUS_ENUM } from "../../global/enums";

export async function changeOrderStatus(request: Request, response: Response) {
	const { id } = request.params;

	const { status } = request.body as { status: ORDER_STATUS_ENUM };

	const statusAllowed = Object.keys(ORDER_STATUS_ENUM);

	if (!statusAllowed.includes(status)) {
		return response.status(400).json({
			error: `Status should be one of these: ${statusAllowed.join(", ")}`,
		});
	}

	await Order.findByIdAndUpdate(id, { status });

	response.sendStatus(204);
}
