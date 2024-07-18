import { Link, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import css from "./css.module.css";
import { PATH } from "./router";

export default function App() {
	return (
		<div className={css.app}>
			<header>
				<nav>
					<Link to={PATH.Project}>Proyectos</Link>
					<Link to={PATH.AboutMe}>Sobre mi</Link>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
