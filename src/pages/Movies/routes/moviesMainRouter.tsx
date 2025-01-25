import Main from "../Main";
import { addRouter } from "./addRouter";
import { detailsRouter } from "./detailsRouter";
import { editRouter } from "./editRouter";
import { moviesRouter } from "./moviesRouter";


export const mainRouter = [
    {
        path: "movies",
        element: <Main />,
        children: [
            ...moviesRouter,
            ...addRouter,
            ...editRouter,
            ...detailsRouter
        ]
    }
]