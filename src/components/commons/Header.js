// Se crea una constante con el nombre del archivo y adentro se pone el componente
const Header = () => {
	return (
		<div className="navbar is-primary">
			<div className="navbar-brand">
				<a href="/#" className="navbar-item">
					<img src="logo.png" alt="Logo" />
				</a>
			</div>
		</div>
	);
};

// Para decir que queremos exportar este componente
export default Header;
