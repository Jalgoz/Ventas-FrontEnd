import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

const FilaCliente = ({ cliente }) => {
	const { setMostrarModal, setTituloModal } = useContext(ModalContext);

	const modificarCliente = () => {
		setMostrarModal(true);
		setTituloModal("Modificar cliente");
	};

	const eliminarCliente = () => {
		console.log("Eliminando ....");
	};

	return (
		<tr key={cliente.idCliente}>
			<td>
				<button
					className="button is-info mr-1"
					title="Modificar"
					onClick={() => modificarCliente()}
				>
					<span className="icon is-small">
						<i className="fas fa-edit"></i>
					</span>
				</button>

				<button
					className="button is-danger"
					title="Eliminar"
					onClick={() => eliminarCliente()}
				>
					<span className="icon is-small">
						<i className="fas fa-trash-alt"></i>
					</span>
				</button>
			</td>
			<td>{cliente.nombre}</td>
			<td>{cliente.apellidos}</td>
			<td>{cliente.direccion}</td>
			<td>{cliente.telefono}</td>
			<td>{cliente.email}</td>
		</tr>
	);
};

export default FilaCliente;
