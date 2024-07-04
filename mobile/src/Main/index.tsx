import { useState } from "react";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";

import { Cart } from "../components/Cart";

import { ActivityIndicator } from "react-native";
import type { CartItem } from "../types/CartItem";
import type { Product } from "../types/Product";
import {
	CanteredContainer,
	CategoriesContainer,
	Container,
	Footer,
	FooterContainer,
	MenuContainer,
} from "./styles";

import { Empty } from "../components/Icons/Empty";
import { Text } from "../components/Text";

export function Main() {
	const [isTableModalVisible, setIsTableModalVisible] = useState(false);
	const [selectedTable, setSelectedTable] = useState("");
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [products] = useState<Product[]>([]);

	function handleSaveTable(table: string) {
		setSelectedTable(table);
	}

	function handleCancelOrder() {
		setSelectedTable("");
		setCartItems([]);
	}

	function handleAddToCart(product: Product) {
		if (!selectedTable) {
			setIsTableModalVisible(true);
		}

		setCartItems((prevState) => {
			const itemIndex = prevState.findIndex(
				(cartItem) => cartItem.product._id === product._id,
			);

			if (itemIndex < 0) {
				return prevState.concat({
					quantity: 1,
					product,
				});
			}

			const newCartItems = [...prevState];
			const item = newCartItems[itemIndex];

			newCartItems[itemIndex] = {
				...item,
				quantity: item.quantity + 1,
			};

			return newCartItems;
		});
	}

	function handleDecremetCartItem(product: Product) {
		setCartItems((prevState) => {
			const itemIndex = prevState.findIndex(
				(cartItem) => cartItem.product._id === product._id,
			);

			const item = prevState[itemIndex];
			const newCartItems = [...prevState];

			if (item.quantity === 1) {
				newCartItems.splice(itemIndex, 1);

				return newCartItems;
			}

			newCartItems[itemIndex] = {
				...item,
				quantity: item.quantity - 1,
			};

			return newCartItems;
		});
	}

	function handleConfirmOrder() {
		setSelectedTable("");
		setCartItems([]);
	}

	return (
		<>
			<Container>
				<Header
					selectedTable={selectedTable}
					onCancelOrder={handleCancelOrder}
				/>

				{isLoading ? (
					<CanteredContainer>
						<ActivityIndicator color="#D73035" size="large" />
					</CanteredContainer>
				) : (
					<>
						<CategoriesContainer>
							<Categories />
						</CategoriesContainer>

						{products.length > 0 ? (
							<MenuContainer>
								<Menu products={products} onAddToCart={handleAddToCart} />
							</MenuContainer>
						) : (
							<CanteredContainer>
								<Empty />
								<Text color="#666" style={{ marginTop: 24 }}>
									Nenhum produto foi encontrado!
								</Text>
							</CanteredContainer>
						)}
					</>
				)}
			</Container>

			<Footer>
				<FooterContainer>
					{!selectedTable && (
						<Button
							onPress={() => setIsTableModalVisible(true)}
							disabled={isLoading}
						>
							Novo pedido
						</Button>
					)}

					{selectedTable && (
						<Cart
							cartItems={cartItems}
							onAdd={handleAddToCart}
							onDecrement={handleDecremetCartItem}
							onConfirmOrder={handleConfirmOrder}
						/>
					)}
				</FooterContainer>
			</Footer>

			<TableModal
				visible={isTableModalVisible}
				onClose={() => setIsTableModalVisible(false)}
				onSave={handleSaveTable}
			/>
		</>
	);
}
