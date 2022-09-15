import { ModalContextProvider } from "../../context/ModalContext";
import Header from "./Header";
import Menu from "./Menu";

const Layout = props => {
	return (
		<ModalContextProvider>
			<div>
				<Header />
				<div className="container mt-4">
					<div className="columns">
						<div className="column is-one-quarter">
							<Menu />
						</div>
						<div className="column">{props.children}</div>
					</div>
				</div>
			</div>
		</ModalContextProvider>
	);
};

export default Layout;
