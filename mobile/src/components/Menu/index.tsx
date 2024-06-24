import { products } from "@/src/mocks/products";
import { FlatList, TouchableOpacity } from "react-native";
import { Text } from "../Text";

import { formatCurrency } from "@/src/utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import {
	AddToCartButton,
	Divider,
	Product,
	ProductDetails,
	ProductImage,
} from "./styles";

export function Menu() {
	return (
		<FlatList
			data={products}
			style={{ marginTop: 32 }}
			contentContainerStyle={{ paddingHorizontal: 24 }}
			ItemSeparatorComponent={Divider}
			keyExtractor={(product) => product._id}
			renderItem={({ item: product }) => (
				<Product>
					<ProductImage
						source={{
							uri: `http://192.168.1.12:8080/uploads/${product.imagePath}`,
						}}
					/>

					<ProductDetails>
						<Text weight="600">{product.name}</Text>
						<Text size={14} color="#666666" style={{ marginVertical: 8 }}>
							{product.description}
						</Text>
						<Text weight="600" size={14}>
							{formatCurrency(product.price)}
						</Text>
					</ProductDetails>

					<AddToCartButton>
						<PlusCircle />
					</AddToCartButton>
				</Product>
			)}
		/>
	);
}
