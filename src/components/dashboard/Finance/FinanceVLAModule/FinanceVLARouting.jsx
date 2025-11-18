import React, { Suspense } from "react";
import styles from "./FinanceVLA.module.css";
import VLAHeader from "./VLAHeader";
import FinanceVLAHome from "./FinanceVLAHome";
import { Route, Routes, useNavigate } from "react-router-dom";
import DropdownSkeleton from "@/SkeletonLoaders/DropdownSkeleton";

const VLAPayments = lazy(() => import('./VLAPayments'))

function FinanceVLARouting() {
  const navigate = useNavigate()
  return (
    <>
      <div className="main-container">
        <VLAHeader />
        <Routes>
          <Route index element={<FinanceVLAHome navigate={navigate} />} />
          <Route
            path="/vla-payments/*"
            element={
              <Suspense fallback={<DropdownSkeleton />}>
                <VLAPayments navigate={navigate} />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default FinanceVLARouting;
