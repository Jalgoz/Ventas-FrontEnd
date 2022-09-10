import Header from "./Header";
import Menu from "./Menu";

const Layout = () => {
	return (
		<div>
			<Header />
			<div className="container">
				<div className="columns">
					<div className="column is-one-quarter">
						<Menu />
					</div>
					<div className="column">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
							quis.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
