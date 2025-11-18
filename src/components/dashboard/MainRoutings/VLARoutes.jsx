import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AnalyticsPageSkeleton from "@/SkeletonLoaders/AnalyticsPageSkeleton";
import NavbarSkeleton from "@/SkeletonLoaders/NavbarSkeleton";

// Lazy loaded components
const HomePage = lazy(() => import("../Procurement/homepage/HomePage"));
const MilkCollectionRouting = lazy(() => import("../VLAModule/MilkCollection/MilkCollectionRouting"));
const VLAReportsRouting = lazy(() => import("../VLAModule/VLAReports/VLAReportsRouting"));
const VLAMilkBillRouting = lazy(() => import("../VLAModule/VLAMilkBill/VLAMilkBillRouting"));
const VLAPaymentsRouting = lazy(() => import("../VLAModule/VLAPayments/VLAPaymentsRouting"));
const ProcurementAnalytics = lazy(() => import("../DashboardCharts/pages/ProcurementAnalytics"));

function VLARoutes({ department, role }) {
  return (
    <Suspense fallback={<NavbarSkeleton />}>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<AnalyticsPageSkeleton />}>
              <ProcurementAnalytics />
            </Suspense>
          }
        />
        <Route
          path="/milk-collection/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <MilkCollectionRouting />
            </Suspense>
          }
        />
        <Route
          path="/reports/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <VLAReportsRouting />
            </Suspense>
          }
        />
        <Route
          path="/milk-bill/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <VLAMilkBillRouting />
            </Suspense>
          }
        />
        <Route
          path="/payments/*"
          element={
            <Suspense fallback={<NavbarSkeleton />}>
              <VLAPaymentsRouting />
            </Suspense>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default VLARoutes;
