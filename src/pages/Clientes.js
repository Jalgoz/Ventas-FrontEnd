import TablaClientes from "../components/clientes/TablaClientes";
import Layout from "../components/commons/Layout";

const Clientes = () => {
	return (
		<Layout>
			<div className="panel">
				<div className="panel-heading">Clientes</div>

				<div className="box">
					<div className="container">
						<button className="button is-small is-primary">
							<span className="icon is-small">
								<i className="fas fa-plus"></i>
							</span>

							<span>Registrar nuevo cliente</span>
						</button>
					</div>

					<TablaClientes />
				</div>
			</div>
		</Layout>
	);
};

export default Clientes;
