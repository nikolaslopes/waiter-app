import type { Order } from "../../global/types/Order";

export interface OrderModalProps {
	visible: boolean;
	order: Order | null;
}
