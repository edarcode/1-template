import { joinClassNames } from "../../../services/joinClassNames";
import css from "./css.module.css";
import { Props } from "./types";

export default function Footer({ className }: Props) {
	const finalClassName = joinClassNames([css.footer, className]);
	return (
		<footer className={finalClassName}>
			©Casi todos los derechos reservados
		</footer>
	);
}
