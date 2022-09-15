// Importamos Bulma
import "bulma/css/bulma.css";

// Importamos fontawesome
import "@fortawesome/fontawesome-free/js/all";
import Home from "./pages/Home";

import Clientes from "./pages/Clientes";

// Importamos los componentes que queremos utilizar
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axios from "axios"; // import { Axios } from "axios"; // Poner sin las llaves sino sale error

Axios.interceptors.request.use(
	function (config) {
		config.url = `${process.env.REACT_APP_API_BASE_URL}${config.url}`;

		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/clientes" element={<Clientes />} />
			</Routes>
		</Router>
	);
}

export default App;
