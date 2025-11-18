import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AnalyticsPageSkeleton from "@/SkeletonLoaders/AnalyticsPageSkeleton";
import NavbarSkeleton from "@/SkeletonLoaders/NavbarSkeleton";

// Lazy loaded route components
const HomePage = lazy(() => import("../Procurement/homepage/HomePage"));
const AttendanceForm = lazy(() => import("../Procurement/AttendanceManagement/AttendanceForm"));
const LeaveManagementRoute = lazy(() => import("../Procurement/LeaveManagement/LeaveManagementRoute"));
const ApplicationRouting = lazy(() => import("../Procurement/ApplicationManagement/ApplicationRouting"));
const ReimburesmentRouting = lazy(() => import("../Production/Reimbursement/ReimburesmentRouting"));
const SalesTabRouting = lazy(() => import("../SalesModule/SalesTab/SalesTabRouting"));
const ProductionTabRouting = lazy(() => import("../Production/ProductionTab/ProductionTabRouting"));
const FinanceVLARouting = lazy(() => import("../Finance/FinanceVLAModule/FinanceVLARouting"));
const FinanceAnalytics = lazy(() => import("../DashboardCharts/pages/FinanceAnalytics"));

function FinanceRoutes({ department, role }) {
  return (
    <Suspense fallback={<NavbarSkeleton />}>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<AnalyticsPageSkeleton />}>
              <FinanceAnalytics />
            </Suspense>
          }
        />
        <Route
          path="/attendance/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <AttendanceForm />
            </Suspense>
          }
        />
        <Route
          path="/leave-management/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <LeaveManagementRoute />
            </Suspense>
          }
        />
        <Route
          path="/vlas/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <FinanceVLARouting />
            </Suspense>
          }
        />
        <Route
          path="/productions/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <ProductionTabRouting />
            </Suspense>
          }
        />
        <Route
          path="/sales/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <SalesTabRouting />
            </Suspense>
          }
        />
        <Route
          path="/reimbursement/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <ReimburesmentRouting />
            </Suspense>
          }
        />
        <Route
          path="/applications/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <ApplicationRouting />
            </Suspense>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default FinanceRoutes;
