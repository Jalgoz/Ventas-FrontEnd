import TablaClientes from "../components/clientes/TablaClientes";
import ToolbarCliente from "../components/clientes/ToolbarCliente";
import Layout from "../components/commons/Layout";
import Modal from "../components/commons/Modal";

const Clientes = () => {
	return (
		<Layout>
			<div className="panel">
				<div className="panel-heading">Clientes</div>

				<div className="box">
					<ToolbarCliente />
					<TablaClientes />
				</div>
			</div>

			<Modal />
		</Layout>
	);
};

export default Clientes;
