import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AnalyticsPageSkeleton from "@/SkeletonLoaders/AnalyticsPageSkeleton";
import NavbarSkeleton from "@/SkeletonLoaders/NavbarSkeleton";

// Lazy loaded components
const HomePage = lazy(() => import("../Procurement/homepage/HomePage"));
const AttendanceForm = lazy(() => import("../Procurement/AttendanceManagement/AttendanceForm"));
const LeaveManagementRoute = lazy(() => import("../Procurement/LeaveManagement/LeaveManagementRoute"));
const TaskRouting = lazy(() => import("../Procurement/TaskManagement/TaskRouting"));
const LiveLocationsRoute = lazy(() => import("../Procurement/livelocations/LiveLocationsRoute"));
const ApplicationRouting = lazy(() => import("../Procurement/ApplicationManagement/ApplicationRouting"));
const IndentRoute = lazy(() => import("../Procurement/Indents/IndentsRoute"));
const Routing = lazy(() => import("../Procurement/RoutesManagement/Routing"));
const EmployeesRoute = lazy(() => import("../Procurement/Employees/EmployeesRoute"));
const ContractsRoute = lazy(() => import("../Procurement/ContractsPage/ContractsRoute"));

const ReimburesmentRouting = lazy(() => import("../Production/Reimbursement/ReimburesmentRouting"));
const SalesTabRouting = lazy(() => import("../SalesModule/SalesTab/SalesTabRouting"));
const DealersRouting = lazy(() => import("../SalesModule/Dealers/DealersRouting"));
const SalesAnalytics = lazy(() => import("../DashboardCharts/pages/SalesAnalytics"));
const AnalyticalDashboard = lazy(() => import("../DashboardCharts/pages/AnalyticalDashboard"));

function SalesRoutes({ department, role }) {
  const isAdmin = role.includes("Admin");

  return (
    <Suspense fallback={<NavbarSkeleton />}>
      <Routes>
        {!isAdmin ? (
          <Route
            index
            element={
              <Suspense fallback={<AnalyticsPageSkeleton />}>
                <SalesAnalytics />
              </Suspense>
            }
          />
        ) : (
          <Route
            index
            element={
              <Suspense fallback={<AnalyticsPageSkeleton />}>
                <AnalyticalDashboard />
              </Suspense>
            }
          />
        )}
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
          path="/tasks/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <TaskRouting />
            </Suspense>
          }
        />
        <Route
          path="/live-locations/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <LiveLocationsRoute />
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
        <Route
          path="/indents/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <IndentRoute />
            </Suspense>
          }
        />
        <Route
          path="/routes/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <Routing />
            </Suspense>
          }
        />
        <Route
          path="/employees/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <EmployeesRoute />
            </Suspense>
          }
        />
        <Route
          path="/contracts/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <ContractsRoute />
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
          path="/dealers/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <DealersRouting />
            </Suspense>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default SalesRoutes;
