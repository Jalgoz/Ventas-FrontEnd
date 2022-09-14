import { useContext } from "react";
import { ClienteContext } from "../../context/ClienteContext";
import { ModalContext } from "../../context/ModalContext";

const FilaCliente = ({ cliente }) => {
	const { setMostrarModal, setTituloModal } = useContext(ModalContext);
	const { obtenerCliente, eliminarCliente } = useContext(ClienteContext);

	const modificarCliente = () => {
		obtenerCliente(cliente); // Obtenemos el cliente actual para mostrarlo
		setMostrarModal(true);
		setTituloModal("Modificar cliente");
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
					onClick={() => eliminarCliente(cliente.idCliente)}
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
