import { lazy } from "react";
import SuspenseLoading from "../../../components/lazyLoading/SuspenseLoading";

const AddMovie = lazy(() => import('../AddMovie'))

export const addRouter = [
    {
        path: "add_movie",
        element: <SuspenseLoading>
                    <AddMovie/>
                </SuspenseLoading>
    }
]