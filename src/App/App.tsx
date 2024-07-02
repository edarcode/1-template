import Counter from "../components/Counter/Counter";
import css from "./css.module.css";

export default function App() {
	return (
		<div className={css.app}>
			<Counter />
		</div>
	);
}
