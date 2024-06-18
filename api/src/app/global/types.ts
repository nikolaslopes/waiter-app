import type { Types } from "mongoose";

import type { ORDER_STATUS_ENUM } from "./enums";

export type CategoryDataType = {
	name: string;
	icon: string;
};

export type ProductDataType = {
	name: string;
	description: string;
	imagePath: string | undefined;
	price: string;
	ingredients: string;
	category: Types.ObjectId;
};

export type OrderDataType = {
	table: string;
	products: Array<{
		product: Types.ObjectId;
		quantity: number;
	}>;
};
