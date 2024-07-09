import { ThemeProvider } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

import { Header } from "../Header";

import { GlobalStyles } from "../../assets/styles/GlobalStyles";
import { defaultTheme } from "../../assets/styles/themes/default";
import { Orders } from "../Orders";
import { ToastContainer } from "react-toastify";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<Header />
			<Orders />
			<ToastContainer position="bottom-center" />
		</ThemeProvider>
	);
}
