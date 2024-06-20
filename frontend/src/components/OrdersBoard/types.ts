import type { Order } from "../../types/Order";

export interface OrdersBoardProps {
	icon: string;
	title: string;
	orders: Array<Order>;
}
