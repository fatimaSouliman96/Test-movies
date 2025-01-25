import { lazy } from "react";
import SuspenseLoading from "../../../components/lazyLoading/SuspenseLoading";

const Details = lazy(() => import('../Details'))
export const detailsRouter = [
    {
        path: "movie_details",
        element: <SuspenseLoading>
            <Details />
        </SuspenseLoading>
    }
]