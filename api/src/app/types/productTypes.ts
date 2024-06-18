import type { ICategory } from "./categoryTypes";

export interface IProductData {
	name: string;
	description: string;
	imagePath: string | undefined;
	price: string;
	ingredients: string;
	category: ICategory;
}

export interface IProductRepository
	extends Omit<IProductData, "price" | "ingredients"> {
	price: number;
	ingredients: Array<{
		name: string;
		icon: string;
	}>;
}
