import { useState } from "react";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";

import { Cart } from "../components/Cart";

import type { CartItem } from "../types/CartItem";
import type { Product } from "../types/Product";
import {
	CategoriesContainer,
	Container,
	Footer,
	FooterContainer,
	MenuContainer,
} from "./styles";

export function Main() {
	const [isTableModalVisible, setIsTableModalVisible] = useState(false);
	const [selectedTable, setSelectedTable] = useState("");
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	function handleSaveTable(table: string) {
		setSelectedTable(table);
	}

	function handleCancelOrder() {
		setSelectedTable("");
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

	return (
		<>
			<Container>
				<Header
					selectedTable={selectedTable}
					onCancelOrder={handleCancelOrder}
				/>

				<CategoriesContainer>
					<Categories />
				</CategoriesContainer>

				<MenuContainer>
					<Menu onAddToCart={handleAddToCart} />
				</MenuContainer>
			</Container>

			<Footer>
				<FooterContainer>
					{!selectedTable && (
						<Button onPress={() => setIsTableModalVisible(true)}>
							Novo pedido
						</Button>
					)}

					{selectedTable && (
						<Cart
							cartItems={cartItems}
							onAdd={handleAddToCart}
							onDecrement={handleDecremetCartItem}
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
