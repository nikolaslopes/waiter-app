import { Actions, ModalBody, OrderDetails, Overlay } from "./styles";

import type { OrderModalProps } from "./types";

import closeIcon from "../../assets/images/close-icon.svg";
import { formatCurrency } from "../../utils/formatCurrency";

export function OrderModal({ visible, order }: OrderModalProps) {
	if (!visible || !order) {
		return null;
	}

	const total = order.products.reduce((acc, { product, quantity }) => {
		return acc + product.price * quantity;
	}, 0);

	return (
		<Overlay>
			<ModalBody>
				<header>
					<strong>Mesa {order.table}</strong>

					<button type="button">
						<img src={closeIcon} alt="Close" />
					</button>
				</header>

				<div className="status-container">
					<small>Status do Pedido</small>

					<div>
						<span>
							{order.status === "WAITING" && "🕐"}
							{order.status === "IN_PRODUCTION" && "🧑‍🍳"}
							{order.status === "DONE" && "✅"}
						</span>

						<strong>
							{order.status === "WAITING" && "Fila de espera"}
							{order.status === "IN_PRODUCTION" && "Em preparação"}
							{order.status === "DONE" && "Pronto!"}
						</strong>
					</div>
				</div>

				<OrderDetails>
					<strong>Itens</strong>

					<div className="order-items">
						{order.products.map(({ _id, quantity, product }) => (
							<div className="item" key={_id}>
								<img
									src={`http://localhost:8080/uploads/${product.imagePath}`}
									alt={product.name}
								/>
								<span className="quantity">{quantity}x</span>
								<div className="product-details">
									<strong>{product.name}</strong>
									<span>{formatCurrency(product.price)}</span>
								</div>
							</div>
						))}
					</div>

					<div className="total">
						<span>Total</span>
						<strong>{formatCurrency(total)}</strong>
					</div>
				</OrderDetails>

				<Actions>
					<button type="button" className="primary">
						<span>🧑‍🍳</span>
						<span>Iniciar Produção</span>
					</button>

					<button type="button" className="secondary">
						<span>Cancelar pedido</span>
					</button>
				</Actions>
			</ModalBody>
		</Overlay>
	);
}
