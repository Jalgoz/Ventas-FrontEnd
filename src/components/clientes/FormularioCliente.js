import { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";

const FormularioCliente = () => {
	// Para poder cerrar el modal
	const { setMostrarModal } = useContext(ModalContext);

	// Cambiamos los datos del cliente, para que nos quede en el formato de clienteDefault
	const handleChange = e => {
		setCliente({
			...cliente,
			[e.target.name]: e.target.value,
		});
	};

	const clienteDefault = {
		nombre: "",
		apellidos: "",
		direccion: "",
		telefono: "",
		email: "",
	};

	// Para que el cliente sea un estado
	const [cliente, setCliente] = useState(clienteDefault);

	// Agregamos un estado para saber si existe algún error al enviar el formulario
	const [mensaje, setMensaje] = useState(null);

	// Controlamos que se hará al momento de hacer click en enviar o guardar
	const handleOnSubmit = e => {
		e.preventDefault();

		// Validar
		if (
			cliente.nombre.trim() === "" ||
			cliente.apellidos.trim() === "" ||
			cliente.email.trim() === ""
		) {
			setMensaje("El nombre, apellidos y email son obligatorios.");
			return;
		}
		// Obtener objeto a enviar
		console.log(obtenerClienteAEnviar());

		// Cerrar y limpiar el modal
		cerrarModal();
	};

	const limpiarForm = () => {
		setMensaje(null);
		setCliente(clienteDefault);
	};

	// La función que cierra el modal
	const cerrarModal = () => {
		limpiarForm();
		setMostrarModal(false);
	};

	// Para obtener solo los datos que contengan valor
	const obtenerClienteAEnviar = () => {
		let clienteTemp = { ...cliente };

		if (cliente.direccion === "") delete clienteTemp.direccion;
		if (cliente.telefono === "") delete clienteTemp.telefono;

		return clienteTemp;
	};

	return (
		<form onSubmit={handleOnSubmit}>
			{mensaje ? <div className="notification is-danger">{mensaje}</div> : null}

			<div className="field is-horizontal">
				<div className="field-label is-normal">
					<label className="label">Nombre Completo</label>
				</div>
				<div className="field-body">
					<div className="field">
						<p className="control is-expanded has-icons-left">
							<input
								className="input"
								type="text"
								placeholder="Nombre"
								name="nombre"
								value={cliente.nombre}
								onChange={handleChange}
							/>
							<span className="icon is-small is-left">
								<i className="fas fa-user"></i>
							</span>
						</p>
					</div>
					<div className="field">
						<p className="control is-expanded">
							<input
								className="input"
								type="text"
								placeholder="Apellidos"
								name="apellidos"
								value={cliente.apellidos}
								onChange={handleChange}
							/>
						</p>
					</div>
				</div>
			</div>

			<div className="field is-horizontal">
				<div className="field-label is-normal">
					<label className="label">Direccion</label>
				</div>
				<div className="field-body">
					<div className="field">
						<div className="control is-expanded has-icons-left">
							<input
								className="input"
								type="text"
								placeholder="Ingrese su direccion"
								name="direccion"
								value={cliente.direccion}
								onChange={handleChange}
							/>
							<span className="icon is-small is-left">
								<i className="fas fa-map-marked-alt"></i>
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="field is-horizontal">
				<div className="field-label is-normal">
					<label className="label">Telefono</label>
				</div>
				<div className="field-body">
					<div className="field">
						<div className="control is-expanded has-icons-left">
							<input
								className="input"
								type="text"
								placeholder="Telefono"
								name="telefono"
								value={cliente.telefono}
								onChange={handleChange}
							/>
							<span className="icon is-small is-left">
								<i className="fas fa-phone"></i>
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="field is-horizontal">
				<div className="field-label is-normal">
					<label className="label">Email</label>
				</div>
				<div className="field-body">
					<div className="field">
						<div className="control is-expanded has-icons-left">
							<input
								className="input"
								type="email"
								placeholder="Ingrese su Email"
								name="email"
								value={cliente.email}
								onChange={handleChange}
							/>
							<span className="icon is-small is-left">
								<i className="fas fa-envelope"></i>
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="field is-horizontal">
				<div className="field-label"></div>
				<div className="field-body">
					<div className="field">
						<div className="control">
							<button type="submit" className="button is-primary mr-1">
								Guardar
							</button>
							<button
								type="button"
								className="button"
								onClick={() => cerrarModal()}
							>
								Cancelar
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};

export default FormularioCliente;
