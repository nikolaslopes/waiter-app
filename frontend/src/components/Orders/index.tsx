import { useEffect, useState } from "react";
import { OrdersBoard } from "../OrdersBoard";

import { Container } from "./styles";
import type { Order } from "../../global/types/Order";
import { httpClient } from "../../services/client/httpClient";

export function Orders() {
	const [orders, setOrders] = useState<Order[]>([]);

	useEffect(() => {
		httpClient.get("/orders").then(({ data }) => {
			setOrders(data);
		});
	}, []);

	const waitingOrders = orders.filter((order) => order.status === "WAITING");
	const inProductionOrders = orders.filter(
		(order) => order.status === "IN_PRODUCTION",
	);
	const doneOrders = orders.filter((order) => order.status === "DONE");

	function handleCancelOrder(orderId: string | undefined) {
		setOrders((prevState) =>
			prevState.filter((order) => order._id !== orderId),
		);
	}

	function handleOrderStatusChange(
		orderId: string | undefined,
		status: Order["status"],
	) {
		setOrders((prevState) =>
			prevState.map((order) =>
				order._id === orderId ? { ...order, status } : order,
			),
		);
	}

	return (
		<Container>
			<OrdersBoard
				icon="🕐"
				title="Fila de espera"
				orders={waitingOrders}
				onCancelOrder={handleCancelOrder}
				onChangeOrderStatus={handleOrderStatusChange}
			/>
			<OrdersBoard
				icon="🧑‍🍳"
				title="Em preparação"
				orders={inProductionOrders}
				onCancelOrder={handleCancelOrder}
				onChangeOrderStatus={handleOrderStatusChange}
			/>
			<OrdersBoard
				icon="✅"
				title="Pronto!"
				orders={doneOrders}
				onCancelOrder={handleCancelOrder}
				onChangeOrderStatus={handleOrderStatusChange}
			/>
		</Container>
	);
}
