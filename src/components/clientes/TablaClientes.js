import { useState } from "react";
import FilaCliente from "./FilaCliente";

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
						<FilaCliente cliente={cliente} key={cliente.idCliente} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TablaClientes;
