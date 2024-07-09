import { useState } from "react";

import { OrderModal } from "../OrderModal";
import { Container, OrdersContainer } from "./styles";

import { toast } from "react-toastify";

import type { Order } from "../../global/types/Order";
import type { OrdersBoardProps } from "./types";
import { httpClient } from "../../services/client/httpClient";

export function OrdersBoard({
	icon,
	title,
	orders,
	onCancelOrder,
	onChangeOrderStatus,
}: OrdersBoardProps) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	function handleOpenModal(order: Order) {
		setIsModalVisible(true);
		setSelectedOrder(order);
	}

	function handleCloseModal() {
		setIsModalVisible(false);
		setSelectedOrder(null);
	}

	async function handleChangeOrderStatus() {
		setIsLoading(true);

		const status =
			selectedOrder?.status === "WAITING" ? "IN_PRODUCTION" : "DONE";

		await httpClient.patch(`/orders/${selectedOrder?._id}`, {
			status,
		});

		toast.success(
			`O pedido da Mesa ${selectedOrder?.table} teve o status alterado!`,
		);
		onChangeOrderStatus(selectedOrder?._id, status);
		setIsLoading(false);
		setIsModalVisible(false);
	}

	async function handleCancelOrder() {
		setIsLoading(true);

		await httpClient.delete(`/orders/${selectedOrder?._id}`);

		toast.success(`O pedido da Mesa ${selectedOrder?.table} foi cancelado!`);
		onCancelOrder(selectedOrder?._id);
		setIsLoading(false);
		setIsModalVisible(false);
	}

	return (
		<Container>
			<OrderModal
				visible={isModalVisible}
				onClose={handleCloseModal}
				order={selectedOrder}
				onCancelOrder={handleCancelOrder}
				isLoading={isLoading}
				onChangeOrderStatus={handleChangeOrderStatus}
			/>

			<header>
				<span>{icon}</span>
				<strong>{title}</strong>
				<span>({orders.length})</span>
			</header>

			{orders.length > 0 && (
				<OrdersContainer>
					{orders.map((order) => (
						<button
							type="button"
							key={order._id}
							onClick={() => handleOpenModal(order)}
						>
							<strong>Mesa {order.table}</strong>
							<span>{order.products.length} itens</span>
						</button>
					))}
				</OrdersContainer>
			)}
		</Container>
	);
}
