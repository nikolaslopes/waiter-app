import { products } from "@/src/mocks/products";
import { useState } from "react";
import { FlatList } from "react-native";
import { Text } from "../Text";

import type { Product } from "@/src/types/Product";
import { formatCurrency } from "@/src/utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";

import {
	AddToCartButton,
	Divider,
	ProductContainer,
	ProductDetails,
	ProductImage,
} from "./styles";

interface MenuProps {
	onAddToCart: (product: Product) => void;
}

export function Menu({ onAddToCart }: MenuProps) {
	const [isProductModalVisible, setIsProductModalVisible] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	function handleOpenProducModal(product: Product) {
		setIsProductModalVisible(true);
		setSelectedProduct(product);
	}

	function handleCloseProductModal() {
		setIsProductModalVisible(false);
		setSelectedProduct(null);
	}

	return (
		<>
			<ProductModal
				visible={isProductModalVisible}
				onClose={() => handleCloseProductModal()}
				product={selectedProduct}
				onAddToCart={onAddToCart}
			/>
			<FlatList
				data={products}
				style={{ marginTop: 32 }}
				contentContainerStyle={{ paddingHorizontal: 24 }}
				ItemSeparatorComponent={Divider}
				keyExtractor={(product) => product._id}
				renderItem={({ item: product }) => (
					<ProductContainer onPress={() => handleOpenProducModal(product)}>
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

						<AddToCartButton onPress={() => onAddToCart(product)}>
							<PlusCircle />
						</AddToCartButton>
					</ProductContainer>
				)}
			/>
		</>
	);
}
