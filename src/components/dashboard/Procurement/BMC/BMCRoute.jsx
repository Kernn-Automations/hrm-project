import { Route, Routes } from "react-router-dom";
import BMCHeader from "./BMCHeader";
import BmcPage from "./BMCPage";
import { lazy, Suspense } from "react";
import DropdownSkeleton from "@/SkeletonLoaders/DropdownSkeleton";

const MapFullScreenView = lazy(() => import('./MapFullScreenView'))

const BMCRoute = () => {
    return (
        <div className="main-container">
            <BMCHeader />
            <Routes>
                <Route index element={<BmcPage />} />
                <Route path="/map/*" element={
                    <Suspense fallback={<DropdownSkeleton/>}>
                        <MapFullScreenView />
                    </Suspense>
                } />
            </Routes>
        </div>
    );
};

export default BMCRoute;