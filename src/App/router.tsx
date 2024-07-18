import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutMe from "./pages/AboutMe/AboutMe";
import ErrPage from "./pages/ErrPage/ErrPage";
import Project from "./pages/Project/Project";

export const PATH = {
	App: "/",
	AboutMe: "/",
	Project: "project"
};

export const router = createBrowserRouter([
	{
		path: PATH.App,
		element: <App />,
		errorElement: <ErrPage />,
		children: [
			{
				path: PATH.AboutMe,
				element: <AboutMe />
			},
			{
				path: PATH.Project,
				element: <Project />
			}
		]
	}
]);
