import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AnalyticsPageSkeleton from '@/SkeletonLoaders/AnalyticsPageSkeleton';
import NavbarSkeleton from '@/SkeletonLoaders/NavbarSkeleton';

// Lazy-loaded components
const HomePage = lazy(() => import('../Procurement/homepage/HomePage'));
const IndentRoute = lazy(() => import('../Procurement/Indents/IndentsRoute'));
const Routing = lazy(() => import('../Production/Shifts/Routing'));
const ReimburesmentRouting = lazy(() => import('../Production/Reimbursement/ReimburesmentRouting'));
const DepartmentsRouting = lazy(() => import('../Production/Departments/DepartmentsRouting'));
const AttendanceForm = lazy(() => import('../Procurement/AttendanceManagement/AttendanceForm'));
const LeaveManagementRoute = lazy(() => import('../Procurement/LeaveManagement/LeaveManagementRoute'));
const ApplicationRouting = lazy(() => import('../Procurement/ApplicationManagement/ApplicationRouting'));
const EmployeesRoute = lazy(() => import('../Procurement/Employees/EmployeesRoute'));
const ProductionTabRouting = lazy(() => import('../Production/ProductionTab/ProductionTabRouting'));
const QandARouting = lazy(() => import('../Production/QandA/QandARouting'));
const ProductsRouting = lazy(() => import('../Production/Products/ProductsRouting'));
const ProductionAnalytics = lazy(() => import('../DashboardCharts/pages/ProductionAnalytics'));
const AnalyticalDashboard = lazy(() => import('../DashboardCharts/pages/AnalyticalDashboard'));

function ProductionRoutes({ department, role }) {
  const isAdmin = role.includes('Admin');

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
                <ProductionAnalytics />
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
          path="/employees/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <EmployeesRoute />
            </Suspense>
          }
        />
        <Route
          path="/shifts/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <Routing />
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
          path="/reimbursement/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <ReimburesmentRouting />
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
          path="/q-and-a/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <QandARouting />
            </Suspense>
          }
        />
        <Route
          path="/products/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <ProductsRouting />
            </Suspense>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default ProductionRoutes;
