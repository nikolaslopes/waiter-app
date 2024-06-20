import { Container, OrdersContainer } from "./styles";

import type { OrdersBoardProps } from "./types";

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
	function handleOpenModal() {
		alert("Modal foi aberto");
	}

	return (
		<Container>
			<header>
				<span>{icon}</span>
				<strong>{title}</strong>
				<span>({orders.length})</span>
			</header>

			{orders.length > 0 && (
				<OrdersContainer>
					{orders.map((order) => (
						<button type="button" key={order._id} onClick={handleOpenModal}>
							<strong>Mesa {order.table}</strong>
							<span>{order.products.length} itens</span>
						</button>
					))}
				</OrdersContainer>
			)}
		</Container>
	);
}
