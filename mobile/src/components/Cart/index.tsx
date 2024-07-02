import type { CartItem } from "@/src/types/CartItem";

import { formatCurrency } from "@/src/utils/formatCurrency";
import { FlatList, TouchableOpacity } from "react-native";
import { MinusCircle } from "../Icons/MinusCircle";
import { PlusCircle } from "../Icons/PlusCircle";
import { Text } from "../Text";
import {
	Actions,
	Image,
	Item,
	ProductContainer,
	ProductDetails,
	QuantityContainer,
} from "./styles";

interface CartProps {
	cartItems: CartItem[];
}

export function Cart({ cartItems }: CartProps) {
	return (
		<FlatList
			data={cartItems}
			keyExtractor={(cartItem) => cartItem.product._id}
			showsVerticalScrollIndicator={false}
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
						<TouchableOpacity>
							<PlusCircle />
						</TouchableOpacity>
						<TouchableOpacity>
							<MinusCircle />
						</TouchableOpacity>
					</Actions>
				</Item>
			)}
		/>
	);
}
