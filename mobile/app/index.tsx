import { useFonts } from "expo-font";
import { StatusBar } from "react-native";

import { Main } from "@/src/Main";

export default function HomeScreen() {
	const [isFontLoaded] = useFonts({
		"GeneralSans-400": require("../src/assets/fonts/GeneralSans-Regular.otf"),
		"GeneralSans-600": require("../src/assets/fonts/GeneralSans-Semibold.otf"),
		"GeneralSans-700": require("../src/assets/fonts/GeneralSans-Bold.otf"),
	});

	if (!isFontLoaded) {
		return null;
	}

	return (
		<>
			<StatusBar barStyle={"dark-content"} />
			<Main />
		</>
	);
}
