import type { CartItem } from "@/src/types/CartItem";

import type { Product } from "@/src/types/Product";
import { formatCurrency } from "@/src/utils/formatCurrency";
import { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Button } from "../Button";
import { MinusCircle } from "../Icons/MinusCircle";
import { PlusCircle } from "../Icons/PlusCircle";
import { OrderConfirmedModal } from "../OrderConfirmedModal";
import { Text } from "../Text";
import {
	Actions,
	Image,
	Item,
	ProductContainer,
	ProductDetails,
	QuantityContainer,
	Summary,
	TotalContainer,
} from "./styles";

interface CartProps {
	cartItems: CartItem[];
	onAdd: (product: Product) => void;
	onDecrement: (product: Product) => void;
}

export function Cart({ cartItems, onAdd, onDecrement }: CartProps) {
	const [isOrderConfirmedModalVisible, setIsOrderConfirmedModalVisible] =
		useState(true);

	const total = cartItems.reduce((acc, cartItem) => {
		return acc + cartItem.quantity * cartItem.product.price;
	}, 0);

	function handleConfirmOrder() {
		setIsOrderConfirmedModalVisible(true);
	}

	function handleCloseConfirmedModal() {
		setIsOrderConfirmedModalVisible(false);
	}

	return (
		<>
			<OrderConfirmedModal
				visible={isOrderConfirmedModalVisible}
				onClose={handleCloseConfirmedModal}
			/>

			{cartItems.length > 0 && (
				<FlatList
					data={cartItems}
					keyExtractor={(cartItem) => cartItem.product._id}
					showsVerticalScrollIndicator={false}
					style={{ marginBottom: 20, maxHeight: 140 }}
					renderItem={({ item: cartItem }) => (
						<Item>
							<ProductContainer>
								<Image
									source={{
										uri: `http://192.168.1.12:8080/uploads/${cartItem.product.imagePath}`,
									}}
								/>

								<QuantityContainer>
									<Text size={14} color="#666">
										{cartItem.quantity}x
									</Text>
								</QuantityContainer>

								<ProductDetails>
									<Text size={14} weight="600">
										{cartItem.product.name}
									</Text>
									<Text size={14} color="#666" style={{ marginTop: 4 }}>
										{formatCurrency(cartItem.product.price)}
									</Text>
								</ProductDetails>
							</ProductContainer>

							<Actions>
								<TouchableOpacity onPress={() => onAdd(cartItem.product)}>
									<PlusCircle />
								</TouchableOpacity>
								<TouchableOpacity onPress={() => onDecrement(cartItem.product)}>
									<MinusCircle />
								</TouchableOpacity>
							</Actions>
						</Item>
					)}
				/>
			)}

			<Summary>
				<TotalContainer>
					{cartItems.length > 0 ? (
						<>
							<Text color="#666">Total</Text>
							<Text size={20} weight="600">
								{formatCurrency(total)}
							</Text>
						</>
					) : (
						<Text color="#999">Seu carrinho está vazio</Text>
					)}
				</TotalContainer>

				<Button onPress={handleConfirmOrder} disabled={cartItems.length === 0}>
					Confirmar pedido
				</Button>
			</Summary>
		</>
	);
}
