import { Modal } from "react-native";
import { CheckCircle } from "../Icons/CheckCircle";
import { Text } from "../Text";
import { Container, OkButton } from "./styles";

interface OrderConfirmedModalProps {
	visible: boolean;
	onClose: () => void;
}

export function OrderConfirmedModal({
	visible,
	onClose,
}: OrderConfirmedModalProps) {
	if (!visible) {
		return null;
	}

	return (
		<Modal visible={visible} animationType="fade">
			<Container>
				<CheckCircle />

				<Text
					size={20}
					weight="600"
					color="#FFFFFF"
					style={{ marginTop: 12, marginBottom: 4 }}
				>
					Pedido confrimado
				</Text>
				<Text color="#FFFFFF" opacity={0.9}>
					O pedido já entrou na fila de produção!
				</Text>

				<OkButton onPress={onClose}>
					<Text color="#D73035" weight="600">
						Ok
					</Text>
				</OkButton>
			</Container>
		</Modal>
	);
}
