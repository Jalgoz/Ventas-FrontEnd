import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

const Modal = props => {
	const { mostrarModal, tituloModal, setMostrarModal, setTituloModal } =
		useContext(ModalContext);

	return (
		<div className={`modal ${mostrarModal ? "is-active" : ""}`}>
			<div className="modal-background"></div>

			<div className="modal-card">
				<header className="modal-card-head">
					<p className="modal-card-title">{tituloModal}</p>

					<button
						className="delete"
						aria-label="close"
						onClick={() => {
							setMostrarModal(false);
							setTituloModal("");
						}}
					></button>
				</header>

				<section className="modal-card-body">{props.children}</section>
			</div>
		</div>
	);
};

export default Modal;
