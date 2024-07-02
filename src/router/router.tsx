import { createBrowserRouter } from "react-router-dom";
import App from "../App/App";
import { APP } from "../constants/paths";
import ErrPage from "../views/ErrPage/ErrPage";

export const router = createBrowserRouter([
	{
		path: APP,
		element: <App />,
		errorElement: <ErrPage />
	}
]);
