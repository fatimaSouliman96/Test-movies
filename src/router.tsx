import { createHashRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import { mainRouter } from "./pages/Movies/routes/moviesMainRouter";


export const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home />
            },
            ...mainRouter,

        ]
    }
])