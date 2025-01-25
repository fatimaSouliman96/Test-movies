import { lazy } from "react";
import SuspenseLoading from "../../../components/lazyLoading/SuspenseLoading";

const EditMovei = lazy(() => import('../EditMovie'))

export const editRouter = [
    {
        path: "edit_movie",
        element: <SuspenseLoading>
            <EditMovei />
        </SuspenseLoading>

    }
]