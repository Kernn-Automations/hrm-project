import React, { lazy, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SalesAnalysis from "./SalesAnalysis";
import SalesHeader from "./SalesHeader";
import AnalysisForm from "./AnalysisForm";
import SquareTableSkeleton from "@/SkeletonLoaders/SquareTableSkeleton";

const SalesIndents = lazy(() => import('./SalesIndents'))
const DamageAndReturn = lazy(() => import('./DamageAndReturn'))
const SalesInvoice = lazy(() => import('./SalesInvoice'))
const DeliveryChallans = lazy(() => import('./DeliveryChallans'))
const Payments = lazy(() => import('./Payments'))

function SalesTabRouting() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container">
        <SalesHeader />
        <Routes>
          <Route index element={<SalesAnalysis navigate={navigate} />} />
          <Route
            path="/sales-indent/*"
            element={
              <Suspense fallback={<SquareTableSkeleton />}>
                <SalesIndents navigate={navigate} />
              </Suspense>
            }
          />
          <Route
            path="/damage-and-return/*"
            element={
              <Suspense fallback={<SquareTableSkeleton />}>
                <DamageAndReturn navigate={navigate} />
              </Suspense>
            }
          />
          <Route
            path="/invoices/*"
            element={
              <Suspense fallback={<SquareTableSkeleton />}>
                <SalesInvoice navigate={navigate} />
              </Suspense>
            }
          />
          <Route
            path="/delivery-challan/*"
            element={
              <Suspense fallback={<SquareTableSkeleton />}>
                <DeliveryChallans navigate={navigate} />
              </Suspense>
            }
          />
          <Route
            path="/payments/*"
            element={
              <Suspense fallback={<SquareTableSkeleton />}>
                <Payments navigate={navigate} />
              </Suspense>
            }
          />
          <Route
            path="/Analysis-form"
            element={<AnalysisForm navigate={navigate} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default SalesTabRouting;
