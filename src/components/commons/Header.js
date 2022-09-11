import { Link } from "react-router-dom";

// Se crea una constante con el nombre del archivo y adentro se pone el componente
const Header = () => {
	return (
		<div className="navbar is-primary">
			<div className="navbar-brand">
				<Link to={"/"} className="navbar-item">
					<img src="logo.png" alt="Logo" />
				</Link>
			</div>
		</div>
	);
};

// Para decir que queremos exportar este componente
export default Header;
