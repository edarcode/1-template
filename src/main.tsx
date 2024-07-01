import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";
import "./global.css";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <RouterProvider router={router} />
);
