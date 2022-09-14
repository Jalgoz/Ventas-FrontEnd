import { createContext, useReducer } from "react";
import ClienteReducer from "../reducer/ClienteReducer";
import { OBTENER_CLIENTES } from "../const/TiposDeAcciones";

export const ClienteContext = createContext();

export const ClienteContextProvider = props => {
	const initialState = {
		listaClientes: [],
	};

	// Obtendremos un state y un método dispatch
	const [state, dispatch] = useReducer(ClienteReducer, initialState);

	const obtenerClientes = () => {
		const clientes = [
			{
				idCliente: 0,
				nombre: "Seth",
				apellidos: "Lozada Gómez",
				direccion: "Irpavi",
				telefono: "",
				email: "sethsillo@gmail.com",
			},
			{
				idCliente: 1,
				nombre: "Isis",
				apellidos: "Lozada Gómez",
				direccion: "Irpavi",
				telefono: "",
				email: "isis00@gmail.com",
			},
		];

		// Este código manda a clienteReducer.js
		dispatch({
			type: OBTENER_CLIENTES,
			payload: clientes,
		});
	};

	return (
		<ClienteContext.Provider
			value={{
				listaClientes: state.clienteLista, // Estos nombres deben ser iguales que en tablaCliente.js
				obtenerClientes,
			}}
		>
			{props.children}
		</ClienteContext.Provider>
	);
};

/* 
const [listaClientes, setListaClientes] = useState([
		{
			idCliente: 0,
			nombre: "Seth",
			apellidos: "Lozada Gómez",
			direccion: "Irpavi",
			telefono: "",
			email: "sethsillo@gmail.com",
		},
		{
			idCliente: 1,
			nombre: "Isis",
			apellidos: "Lozada Gómez",
			direccion: "Irpavi",
			telefono: "",
			email: "isis00@gmail.com",
		},
	]);
*/
