const TablaClientes = () => {
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
					<tr>
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
						<td>Freddy</td>
						<td>Aguilar</td>
						<td>C. Lincon</td>
						<td>73097333</td>
						<td>freddy95@gmail.com</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TablaClientes;
