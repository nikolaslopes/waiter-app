import { useState } from "react";

import { OrderModal } from "../Modal";
import { Container, OrdersContainer } from "./styles";

import type { Order } from "../../global/types/Order";
import type { OrdersBoardProps } from "./types";

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

	function handleOpenModal(order: Order) {
		setIsModalVisible(true);
		setSelectedOrder(order);
	}

	function handleCloseModal() {
		setIsModalVisible(false);
		setSelectedOrder(null);
	}

	return (
		<Container>
			<OrderModal
				visible={isModalVisible}
				onClose={handleCloseModal}
				order={selectedOrder}
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
