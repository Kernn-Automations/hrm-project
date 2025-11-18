import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AnalyticsPageSkeleton from "@/SkeletonLoaders/AnalyticsPageSkeleton";
import NavbarSkeleton from "@/SkeletonLoaders/NavbarSkeleton";

// Lazy loaded components
const HomePage = lazy(() => import("../Procurement/homepage/HomePage"));
const LiveLocationsRoute = lazy(() => import("../Procurement/livelocations/LiveLocationsRoute"));
const AttendanceForm = lazy(() => import("../Procurement/AttendanceManagement/AttendanceForm"));
const TaskRouting = lazy(() => import("../Procurement/TaskManagement/TaskRouting"));
const LeaveManagementRoute = lazy(() => import("../Procurement/LeaveManagement/LeaveManagementRoute"));
const BMCRoute = lazy(() => import("../Procurement/BMC/BMCRoute"));
const ApplicationRouting = lazy(() => import("../Procurement/ApplicationManagement/ApplicationRouting"));
const Routing = lazy(() => import("../Procurement/RoutesManagement/Routing"));
const ReportsRouting = lazy(() => import("../Procurement/Reports/ReportsRouting"));
const IndentRoute = lazy(() => import("../Procurement/Indents/IndentsRoute"));
const EmployeesRoute = lazy(() => import("../Procurement/Employees/EmployeesRoute"));
const ContractsRoute = lazy(() => import("../Procurement/ContractsPage/ContractsRoute"));
const ProcurementAnalytics = lazy(() => import("../DashboardCharts/pages/ProcurementAnalytics"));
const AnalyticalDashboard = lazy(() => import("../DashboardCharts/pages/AnalyticalDashboard"));

function ProcurementRoutes({ department, role }) {
  const isAdmin = role.includes("Admin");

  return (
    <Suspense fallback={<NavbarSkeleton />}>
      <Routes>
        {isAdmin ? (
          <Route
            index
            element={
              <Suspense fallback={<AnalyticsPageSkeleton />}>
                <AnalyticalDashboard />
              </Suspense>
            }
          />
        ) : (
          <Route
            index
            element={
              <Suspense fallback={<AnalyticsPageSkeleton />}>
                <ProcurementAnalytics />
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
          path="/bmc/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <BMCRoute />
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
          path="/routes/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <Routing />
            </Suspense>
          }
        />
        <Route
          path="/reports/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <ReportsRouting />
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
      </Routes>
    </Suspense>
  );
}

export default ProcurementRoutes;
