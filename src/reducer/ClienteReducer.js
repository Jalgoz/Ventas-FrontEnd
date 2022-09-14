import {
	ELIMINAR_CLIENTE,
	MODIFICAR_CLIENTE,
	OBTENER_CLIENTE,
	OBTENER_CLIENTES,
	REGISTRAR_CLIENTE,
} from "../const/TiposDeAcciones";

// eslint-disable-next-line
export default (state, action) => {
	// Retornamos el estado
	switch (action.type) {
		case OBTENER_CLIENTES:
			return {
				...state, // El state es para mantener todos los valores anteriores
				clienteLista: action.payload, // El cliente lista será igual a lo que se haya mandado en el action.payload
			};

		case REGISTRAR_CLIENTE:
			return {
				...state,
				clienteLista: [...state.clienteLista, action.payload], // Tendrá una copia del cliente lista del state además de agregar el cliente que se encuentra en el action.payload
			};

		case OBTENER_CLIENTE:
			return {
				...state,
				clienteActual: action.payload,
			};

		case MODIFICAR_CLIENTE:
			return {
				...state,
				clienteLista: state.clienteLista?.map(cliente =>
					cliente.idCliente === action.payload.idCliente
						? action.payload
						: cliente
				),
			};

		case ELIMINAR_CLIENTE:
			return {
				...state,
				clienteLista: state.clienteLista.filter(
					cliente => cliente.idCliente !== action.payload // Le decimos que solo retorne los datos que no sean igual al id enviado
				),
			};

		default:
			return state;
	}
};
