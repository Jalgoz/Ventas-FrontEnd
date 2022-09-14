import { OBTENER_CLIENTES } from "../const/TiposDeAcciones";
export default (state, action) => {
	// Retornamos el estado
	switch (action.type) {
		case OBTENER_CLIENTES:
			return {
				...state,
				clienteLista: action.payload,
			};
		default:
			return state;
	}
};
