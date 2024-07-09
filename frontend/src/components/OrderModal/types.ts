import type { Order } from "../../global/types/Order";

export interface OrderModalProps {
	visible: boolean;
	onClose: () => void;
	order: Order | null;
	onCancelOrder: () => Promise<void>;
	isLoading: boolean;
	onChangeOrderStatus: () => void;
}
