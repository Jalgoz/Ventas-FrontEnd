import { createContext, useReducer } from "react";
import ClienteReducer from "../reducer/ClienteReducer";
import {
	OBTENER_CLIENTE,
	REGISTRAR_CLIENTE,
	OBTENER_CLIENTES,
	MODIFICAR_CLIENTE,
	ELIMINAR_CLIENTE,
} from "../const/TiposDeAcciones";
import Axios from "axios";
import Swal from "sweetalert2";

export const ClienteContext = createContext();

export const ClienteContextProvider = props => {
	const initialState = {
		clientesLista: [],
		clienteActual: null,
	};

	// Se encarga de enviar el dispatch con el tipo de acción y el nuevo cliente
	const registrarCliente = async cliente => {
		try {
			const resultado = await Axios.post("/clientes", cliente);

			dispatch({
				type: REGISTRAR_CLIENTE,
				payload: resultado.data, // es .data debido que ahí se encuentra todos los datos del cliente sino hacer un console.log(resultado)
			});

			Swal.fire({
				icon: "success",
				title: "Correcto",
				text: "Cliente registrado correctamente",
				toast: false,
			});
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Error",
				text: "No se logró registrar al cliente",
				toast: true,
			});

			console.log(error);
		}
	};

	const obtenerCliente = async cliente => {
		try {
			let clienteEncontrado = null;
			if (cliente !== null) {
				// console.log(cliente.idCliente);
				const resultado = await Axios.get(`/clientes/${cliente.idCliente}`);
				clienteEncontrado = resultado.data; // es .data debido que ahí se encuentra todos los datos del cliente sino hacer un console.log(resultado)
			}

			dispatch({
				type: OBTENER_CLIENTE,
				payload: clienteEncontrado,
			});
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Error",
				text: "No se logró obtener el cliente",
				toast: true,
			});

			console.log(error);
		}
	};

	const actualizarCliente = async cliente => {
		try {
			const resultado = await Axios.put("/clientes", cliente);

			dispatch({
				type: MODIFICAR_CLIENTE,
				payload: resultado.data,
			});

			Swal.fire({
				icon: "success",
				title: "Correcto",
				text: "Cliente modificado correctamente",
				toast: false,
			});
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Error",
				text: "No se logró modificar el cliente",
				toast: true,
			});

			console.log(error);
		}
	};

	const eliminarCliente = async idCliente => {
		try {
			Swal.fire({
				title: "Desea eliminar un cliente?",
				icon: "question",
				showCancelButton: true,
				confirmButtonText: "Si, eliminar",
			}).then(async result => {
				if (result.value) {
					await Axios.delete(`/clientes/${idCliente}`);

					dispatch({
						type: ELIMINAR_CLIENTE,
						payload: idCliente,
					});

					Swal.fire({
						icon: "success",
						title: "Correcto",
						text: "Cliente eliminado correctamente",
						toast: false,
					});
				}
			});
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Error",
				text: "No se logró eliminar el cliente",
				toast: true,
			});

			console.log(error);
		}
	};

	// Obtendremos un state y un método dispatch
	const [state, dispatch] = useReducer(ClienteReducer, initialState);

	// Le decimos que será una función asincrona
	const obtenerClientes = async () => {
		try {
			// Para obtener los clientes de la DB
			const resultado = await Axios.get("/clientes"); // await para que primero termine de ejecutarse esta linea para seguir adelante

			// Este código manda a clienteReducer.js
			dispatch({
				type: OBTENER_CLIENTES,
				payload: resultado.data, // es .data debido que ahí se encuentra todos los datos del cliente sino hacer un console.log(resultado)
			});
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Error",
				text: "No se logró obtener los clientes",
				toast: true,
			});
			console.log(error);
		}
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
