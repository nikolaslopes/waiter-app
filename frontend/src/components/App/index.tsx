import { ThemeProvider } from "styled-components";

import { Header } from "../Header";

import { GlobalStyles } from "../../assets/styles/GlobalStyles";
import { defaultTheme } from "../../assets/styles/themes/default";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<Header />
		</ThemeProvider>
	);
}
