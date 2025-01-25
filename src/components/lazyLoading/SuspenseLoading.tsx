import { CircularProgress } from "@mui/material";
import { ReactNode, Suspense } from "react";

interface LazyLoadingProps {
    children: ReactNode
}

export default function SuspenseLoading({
    children,
}: LazyLoadingProps) {
    return (
        <div className="loading" >
            <Suspense fallback={<CircularProgress />}>
                {children}
            </Suspense>
        </div>
    )
}
