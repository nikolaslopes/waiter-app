import type { Product } from "@/src/types/Product";
import { formatCurrency } from "@/src/utils/formatCurrency";
import { FlatList, Modal } from "react-native";
import { Button } from "../Button";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import {
	CloseButton,
	Footer,
	FooterContainer,
	Header,
	Image,
	IngredientItem,
	IngredientsContainer,
	ModalBody,
	PriceContainer,
} from "./styles";

interface ProductModalProps {
	visible: boolean;
	onClose: () => void;
	product: Product | null;
}

export function ProductModal({ visible, onClose, product }: ProductModalProps) {
	if (!product) {
		return null;
	}

	return (
		<Modal
			visible={visible}
			animationType="slide"
			presentationStyle="pageSheet"
			onRequestClose={onClose}
		>
			<Image
				source={{
					uri: `http://192.168.1.12:8080/uploads/${product.imagePath}`,
				}}
			>
				<CloseButton onPress={onClose}>
					<Close />
				</CloseButton>
			</Image>

			<ModalBody>
				<Header>
					<Text size={24} weight="600">
						{product.name}
					</Text>
					<Text color="#666" style={{ marginTop: 8 }}>
						{product.description}
					</Text>
				</Header>

				{product.ingredients.length > 0 && (
					<IngredientsContainer>
						<Text weight="600" color="#666">
							Ingredientes
						</Text>

						<FlatList
							data={product.ingredients}
							keyExtractor={(ingredient) => ingredient._id}
							showsVerticalScrollIndicator={false}
							style={{ marginVertical: 16 }}
							renderItem={({ item: ingredient }) => (
								<IngredientItem>
									<Text>{ingredient.icon}</Text>
									<Text size={14} color="#666">
										{ingredient.name}
									</Text>
								</IngredientItem>
							)}
						/>
					</IngredientsContainer>
				)}
			</ModalBody>

			<Footer>
				<FooterContainer>
					<PriceContainer>
						<Text color="#666">Preço</Text>
						<Text size={20} weight="600" color="#666">
							{formatCurrency(product.price)}
						</Text>
					</PriceContainer>

					<Button onPress={() => alert("a")}>Adicionar ao pedido</Button>
				</FooterContainer>
			</Footer>
		</Modal>
	);
}
