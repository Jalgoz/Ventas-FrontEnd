import { useState } from "react";

const TablaClientes = () => {
	const [listaClientes, setListaClientes] = useState([
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

	return (
		<div className="table-container">
			<table className="table is-hoverable is-fullwidth">
				<thead>
					<tr>
						<th>Acciones</th>
						<th>Nombres</th>
						<th>Apellidos</th>
						<th>Dirección</th>
						<th>"Telefono"</th>
						<th>Email</th>
					</tr>
				</thead>

				<tbody>
					{listaClientes.map(cliente => (
						<tr key={cliente.idCliente}>
							<td>
								<button className="button is-info mr-1" title="Modificar">
									<span className="icon is-small">
										<i className="fas fa-edit"></i>
									</span>
								</button>

								<button className="button is-danger" title="Eliminar">
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
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TablaClientes;
