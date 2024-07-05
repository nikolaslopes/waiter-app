import { categories } from "@/src/mocks/categories";
import { useState } from "react";
import { FlatList } from "react-native";

import type { Category } from "@/src/types/Category";
import { Text } from "../Text";
import { CategoryContainer, Icon } from "./styles";

interface CategoriesProps {
	categories: Category[];
}

export function Categories({ categories }: CategoriesProps) {
	const [selectedCategory, setSelectedCategory] = useState("");

	function handleSelectCategory(categoryId: string) {
		const category = selectedCategory === categoryId ? "" : categoryId;

		setSelectedCategory(category);
	}

	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ paddingRight: 24 }}
			data={categories}
			keyExtractor={(category) => category._id}
			renderItem={({ item: category }) => {
				const isSelected = selectedCategory === category._id;

				return (
					<CategoryContainer onPress={() => handleSelectCategory(category._id)}>
						<Icon>
							<Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
						</Icon>

						<Text size={14} weight="600">
							{category.name}
						</Text>
					</CategoryContainer>
				);
			}}
		/>
	);
}
