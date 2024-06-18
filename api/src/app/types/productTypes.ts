import type { ICategoryData } from "./categoryTypes";

export interface IProductData {
	name: string;
	description: string;
	imagePath: string | undefined;
	price: string;
	ingredients: string;
	category: ICategoryData;
}
