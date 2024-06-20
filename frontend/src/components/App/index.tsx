import { ThemeProvider } from "styled-components";

import { Header } from "../Header";

import { GlobalStyles } from "../../assets/styles/GlobalStyles";
import { defaultTheme } from "../../assets/styles/themes/default";
import { Orders } from "../Orders";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<Header />
			<Orders />
		</ThemeProvider>
	);
}
