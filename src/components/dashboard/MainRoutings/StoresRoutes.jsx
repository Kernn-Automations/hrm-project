import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AnalyticsPageSkeleton from "@/SkeletonLoaders/AnalyticsPageSkeleton";
import NavbarSkeleton from "@/SkeletonLoaders/NavbarSkeleton";

// Lazy loaded components
const HomePage = lazy(() => import("../Procurement/homepage/HomePage"));
const AttendanceForm = lazy(() => import("../Procurement/AttendanceManagement/AttendanceForm"));
const LeaveManagementRoute = lazy(() => import("../Procurement/LeaveManagement/LeaveManagementRoute"));
const IndentRoute = lazy(() => import("../Procurement/Indents/IndentsRoute"));
const ContractsRoute = lazy(() => import("../Procurement/ContractsPage/ContractsRoute"));
const EmployeesRoute = lazy(() => import("../Procurement/Employees/EmployeesRoute"));
const ApplicationRouting = lazy(() => import("../Procurement/ApplicationManagement/ApplicationRouting"));
const PurchasesRouting = lazy(() => import("../StoresModule/Purchases/PurchasesRouting"));
const DepartmentsRouting = lazy(() => import("../Production/Departments/DepartmentsRouting"));
const ReimburesmentRouting = lazy(() => import("../Production/Reimbursement/ReimburesmentRouting"));
const BillsRouting = lazy(() => import("../StoresModule/Bills/BillsRouting"));
const StoresRouting = lazy(() => import("../StoresModule/Stores/StoresRouting"));
const StoreAnalytics = lazy(() => import("../DashboardCharts/pages/StoreAnalytics"));
const AnalyticalDashboard = lazy(() => import("../DashboardCharts/pages/AnalyticalDashboard"));

function StoresRoutes({ department, role }) {
  const isAdmin = role.includes("Admin");

  return (
    <Suspense fallback={<NavbarSkeleton />}>
      <Routes>
        {!isAdmin ? (
          <Route
            index
            element={
              <Suspense fallback={<AnalyticsPageSkeleton />}>
                <StoreAnalytics />
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
          path="/purchases/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <PurchasesRouting />
            </Suspense>
          }
        />
        <Route
          path="/stores/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <StoresRouting />
            </Suspense>
          }
        />
        <Route
          path="/departments/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <DepartmentsRouting />
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
          path="/contracts/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <ContractsRoute />
            </Suspense>
          }
        />
        <Route
          path="/bills/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <BillsRouting />
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
          path="/applications/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <ApplicationRouting />
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
      </Routes>
    </Suspense>
  );
}

export default StoresRoutes;
