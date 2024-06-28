import type { Order } from "../../global/types/Order";

export interface OrdersBoardProps {
	icon: string;
	title: string;
	orders: Array<Order>;
}
