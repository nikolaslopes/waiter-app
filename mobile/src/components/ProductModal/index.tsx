import type { Product } from "@/src/types/Product";
import { Modal } from "react-native";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import {
	CloseButton,
	Header,
	Image,
	IngredientsContainer,
	ModalBody,
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

				<IngredientsContainer>
					<Text weight="600" color="#666">
						Ingredientes
					</Text>
				</IngredientsContainer>
			</ModalBody>
		</Modal>
	);
}
