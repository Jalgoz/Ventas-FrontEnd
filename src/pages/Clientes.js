import FormularioCliente from "../components/clientes/FormularioCliente";
import TablaClientes from "../components/clientes/TablaClientes";
import ToolbarCliente from "../components/clientes/ToolbarCliente";
import Layout from "../components/commons/Layout";
import Modal from "../components/commons/Modal";
import { ClienteContextProvider } from "../context/ClienteContext";

const Clientes = () => {
	return (
		<Layout>
			<ClienteContextProvider>
				<div className="panel">
					<div className="panel-heading">Clientes</div>

					<div className="box">
						<ToolbarCliente />
						<TablaClientes />
					</div>
				</div>

				<Modal>
					<FormularioCliente />
				</Modal>
			</ClienteContextProvider>
		</Layout>
	);
};

export default Clientes;
