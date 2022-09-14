import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

const ToolbarCliente = () => {
	const { setMostrarModal, setTituloModal } = useContext(ModalContext);
	const abrirModalCrear = () => {
		setTituloModal("Registrar nuevo cliente");
		setMostrarModal(true);
	};

	return (
		<div className="container">
			<button
				className="button is-small is-primary"
				onClick={() => abrirModalCrear()}
			>
				<span className="icon is-small">
					<i className="fas fa-plus"></i>
				</span>

				<span>Registrar nuevo cliente</span>
			</button>
		</div>
	);
};

export default ToolbarCliente;
