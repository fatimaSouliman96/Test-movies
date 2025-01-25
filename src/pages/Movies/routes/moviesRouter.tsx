import { lazy } from "react";
import SuspenseLoading from "../../../components/lazyLoading/SuspenseLoading";

const Movies = lazy(() => import("../Movies"))

export const moviesRouter = [
    {
        path: "",
        element: <SuspenseLoading>
            <Movies/>
        </SuspenseLoading>

    }
]