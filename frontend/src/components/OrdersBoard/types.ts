import type { Order } from "../../global/types/Order";

export interface OrdersBoardProps {
	icon: string;
	title: string;
	orders: Array<Order>;
	onCancelOrder: (orderId?: string) => void;
	onChangeOrderStatus: (
		orderId: string | undefined,
		status: Order["status"],
	) => void;
}
