import React, { lazy, Suspense } from "react";
import ApplicationHeader from "./ApplicationHeader";
import { Route, Routes, useNavigate } from "react-router-dom";
import ApplicationApprovals from "./ApplicationApprovals";
import ApplicationStatus from "./ApplicationStatus";
import SquareTableSkeleton from "@/SkeletonLoaders/SquareTableSkeleton";
import BoxSkeleton from "@/SkeletonLoaders/BoxSkeleton";

const Approvals = lazy(() => import("./ApplicationApprovals"));
const Status = lazy(() => import("./ApplicationStatus"));
const ApplicationHome = lazy(() => import("./ApplicationHome"));

function ApplicationRouting() {

  const navigate = useNavigate();
  return (
    <>
      
        <Routes>
          <Route
            index
            element={
              <Suspense fallback={<BoxSkeleton />}>
                <ApplicationHeader />
               
              </Suspense>
            }
          />

          <Route path='/home' element = {<ApplicationHome  /> }/>
          <Route
            path="/approvals"
            element={
              <Suspense fallback={<SquareTableSkeleton />}>
                <Approvals navigate={navigate}/>
              </Suspense>
            }
          />
          <Route
            path="/status"
            element={
              <Suspense fallback={<SquareTableSkeleton />}>
                <Status navigate={navigate}/>
              </Suspense>
            }
          />
        </Routes>
      
    </>
  );
}

export default ApplicationRouting;
