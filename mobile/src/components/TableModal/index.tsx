import { Modal, Platform, TouchableOpacity } from "react-native";

import { Text } from "../Text";

import { useState } from "react";
import { Button } from "../Button";
import { Close } from "../Icons/Close";
import { Body, Form, Header, Input, Overlay } from "./styles";

interface TableModalProps {
	visible: boolean;
	onClose: () => void;
	onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
	const [table, setTable] = useState("");

	function handleSave() {
		setTable("");
		onSave(table);
		onClose();
	}

	return (
		<Modal visible={visible} transparent animationType="fade">
			<Overlay behavior={Platform.OS === "android" ? "height" : "padding"}>
				<Body>
					<Header>
						<Text weight="600">Informe a mesa</Text>

						<TouchableOpacity onPress={onClose}>
							<Close color="#666666" />
						</TouchableOpacity>
					</Header>

					<Form>
						<Input
							placeholder="Número da mesa"
							placeholderTextColor="#666"
							keyboardType="number-pad"
							onChangeText={(value) => setTable(value)}
						/>

						<Button onPress={handleSave} disabled={table.length === 0}>
							Salvar
						</Button>
					</Form>
				</Body>
			</Overlay>
		</Modal>
	);
}
