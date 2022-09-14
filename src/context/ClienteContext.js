import { createContext, useReducer } from "react";
import ClienteReducer from "../reducer/ClienteReducer";
import {
	OBTENER_CLIENTE,
	REGISTRAR_CLIENTE,
	OBTENER_CLIENTES,
	MODIFICAR_CLIENTE,
	ELIMINAR_CLIENTE,
} from "../const/TiposDeAcciones";
import { v4 as uuidv4 } from "uuid";

export const ClienteContext = createContext();

export const ClienteContextProvider = props => {
	const initialState = {
		clientesLista: [],
		clienteActual: null,
	};

	// Se encarga de enviar el dispatch con el tipo de acción y el nuevo cliente
	const registrarCliente = cliente => {
		let clienteNuevo = {
			...cliente,
			idCliente: uuidv4(),
		};

		dispatch({
			type: REGISTRAR_CLIENTE,
			payload: clienteNuevo,
		});
	};

	const obtenerCliente = cliente => {
		dispatch({
			type: OBTENER_CLIENTE,
			payload: cliente,
		});
	};

	const actualizarCliente = cliente => {
		dispatch({
			type: MODIFICAR_CLIENTE,
			payload: cliente,
		});
	};

	const eliminarCliente = idCliente => {
		dispatch({
			type: ELIMINAR_CLIENTE,
			payload: idCliente,
		});
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
				clientesLista: state.clienteLista, // Estos nombres deben ser iguales que en tablaCliente.js
				clienteActual: state.clienteActual,
				obtenerClientes,
				registrarCliente,
				obtenerCliente,
				actualizarCliente,
				eliminarCliente,
			}}
		>
			{props.children}
		</ClienteContext.Provider>
	);
};

/* 
const [clientesLista, setclientesLista] = useState([
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
