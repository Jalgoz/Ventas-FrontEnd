import React, { useContext, useEffect } from "react";
import { ClienteContext } from "../../context/ClienteContext";
import FilaCliente from "./FilaCliente";

const TablaClientes = () => {
	// Le decimos que usaremos ClienteContext
	const { listaClientes, obtenerClientes } = useContext(ClienteContext);

	// Se harán cambios el la tabla cuando se hagan cambios
	useEffect(() => {
		obtenerClientes();
	}, []);

	// No se pude poner listaClientes.legth por que lo reconoce como undefined
	if (listaClientes?.length === 0)
		return (
			<center>
				<p>No existen clientes.</p>
			</center>
		);

	return (
		<div className="table-container">
			<table className="table is-hoverable is-fullwidth">
				<thead>
					<tr>
						<th>Acciones</th>
						<th>Nombres</th>
						<th>Apellidos</th>
						<th>Dirección</th>
						<th>Telefono</th>
						<th>Email</th>
					</tr>
				</thead>

				<tbody>
					{/* Se debe agregar el signo de interrogación por que detecta el listaCliente como undefined mas info: https://www.webtips.dev/solutions/fix-cannot-read-properties-of-undefined-reading-map */}
					{listaClientes?.map(cliente => (
						// Recorre todos los elementos que existan y crea las filas necesarias
						<FilaCliente cliente={cliente} key={cliente.idCliente} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TablaClientes;
