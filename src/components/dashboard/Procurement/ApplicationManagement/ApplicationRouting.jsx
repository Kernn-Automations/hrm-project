import React, { lazy, Suspense } from "react";
import ApplicationHeader from "./ApplicationHeader";
import { Route, Routes } from "react-router-dom";
import ApplicationApprovals from "./ApplicationApprovals";
import ApplicationStatus from "./ApplicationStatus";
import SquareTableSkeleton from "@/SkeletonLoaders/SquareTableSkeleton";
import BoxSkeleton from "@/SkeletonLoaders/BoxSkeleton";

const Approvals = lazy(() => import("./ApplicationApprovals"));
const Status = lazy(() => import("./ApplicationStatus"));
const ApplicationHome = lazy(() => import("./ApplicationHome"));

function ApplicationRouting() {
  return (
    <>
      <div className="main-container">
        <ApplicationHeader />
        <Routes>
          <Route
            index
            element={
              <Suspense fallback={<BoxSkeleton />}>
                <ApplicationHome />
              </Suspense>
            }
          />
          <Route
            path="/approvals"
            element={
              <Suspense fallback={<SquareTableSkeleton />}>
                <Approvals />
              </Suspense>
            }
          />
          <Route
            path="/status"
            element={
              <Suspense fallback={<SquareTableSkeleton />}>
                <Status />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default ApplicationRouting;
