import React, { useContext, useEffect } from "react";
import { ClienteContext } from "../../context/ClienteContext";
import FilaCliente from "./FilaCliente";

const TablaClientes = () => {
	// Le decimos que usaremos ClienteContext
	const { clientesLista, obtenerClientes } = useContext(ClienteContext);

	// Se harán cambios el la tabla cada vez que se renderize
	useEffect(() => {
		obtenerClientes();
		// eslint-disable-next-line
	}, []);

	// No se pude poner clientesLista.length por que lo reconoce como undefined
	if (!clientesLista)
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
					{clientesLista?.map(cliente => (
						// Recorre todos los elementos que existan y crea las filas necesarias
						<FilaCliente cliente={cliente} key={cliente.idCliente} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TablaClientes;
