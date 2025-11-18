import { Route,Routes } from "react-router-dom";
import IndentsHeader from "./IndentsHeader";
import NewIndent from "./NewIndent";
import Consumptions from "./Consumptions";
import { lazy, Suspense } from "react";
import SquareTableSkeleton from "@/SkeletonLoaders/SquareTableSkeleton";
import DropdownSkeleton from "@/SkeletonLoaders/DropdownSkeleton";

const IndentApprovals = lazy(() => import('./IndentApprovals'))
const IndentStatusPage = lazy(() => import('./IndentStatusPage'))
const ReportsPage = lazy(() => import('./ReportsPage'))

const IndentRoute = () => {
    return (
        <div className="main-container">
            <IndentsHeader/>
            <Routes>
            
                <Route index element={<NewIndent/>}/>
                <Route path='/approvals' element={
                    <Suspense fallback={<SquareTableSkeleton/>}>
                        <IndentApprovals/>
                    </Suspense>
                }/>
                <Route path='/status' element={
                    <Suspense fallback={<SquareTableSkeleton/>}>
                        <IndentStatusPage/>
                    </Suspense>
                }/>
                <Route path='/consumptions' element={<Consumptions/>}/>
                <Route path='/report/*' element={
                    <Suspense fallback={<DropdownSkeleton/>}>
                        <ReportsPage/>
                    </Suspense>
                }/>
                {/* <Route path="Return" element={<Reports />} /> */}

            </Routes>
        </div>
    );

};

export default IndentRoute;