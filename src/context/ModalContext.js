import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = props => {
	// Los datos que retornaremos
	// Obtenemos una variable de estado y el método para modificar el estado
	const [mostrarModal, setMostrarModal] = useState(false);
	const [tituloModal, setTituloModal] = useState("");

	return (
		<ModalContext.Provider
			value={{ mostrarModal, tituloModal, setMostrarModal, setTituloModal }}
		>
			{props.children}
		</ModalContext.Provider>
	);
};
