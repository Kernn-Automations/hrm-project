import React, { lazy, Suspense } from "react";
import styles from "./Reports.module.css";
import { Route, Routes } from "react-router-dom";
import SquareTableSkeleton from "@/SkeletonLoaders/SquareTableSkeleton";


const MilkBill = lazy(() => import('./MilkBill'))
const Pending = lazy(() => import('./PendingAmount'))
const MilkBillReports = lazy(() => import('./MilkBillReports'))



function VLAPayments({ navigate }) {

  return (
    <>
      <div className={styles.pageContainer}>
        <Routes>
          <Route
            index
            element={
              <>
                <button
                  className={styles.reportButton}
                  onClick={() => navigate("/reports/vla-payments/milk-bill")}
                >
                  Milk Bill
                </button>
                <button
                  className={styles.reportButton}
                  onClick={() => navigate("/reports/vla-payments/milk-bill-reports")}
                >
                  Milk Bill Reports
                </button>
                <button
                  className={styles.reportButton}
                  onClick={() =>
                    navigate("/reports/vla-payments/pending-amount")
                  }
                >
                  Pending Amount
                </button>
              </>
            }
          />

          {/* <Route path="/milk-bill" element={<MilkBill navigate={navigate} />} /> */}
          <Route path="/milk-bill" element={
            <Suspense fallback={<SquareTableSkeleton />}>
              <MilkBill navigate={navigate} />
            </Suspense>
          } />
          <Route path="/milk-bill-reports" element={
            <Suspense fallback={<SquareTableSkeleton/>}>
              <MilkBillReports navigate={navigate} />
            </Suspense>
          } />
          <Route path="/pending-amount" element={
            <Suspense fallback={<SquareTableSkeleton />}>
              <Pending navigate={navigate} />
            </Suspense>
          } />
        </Routes>
      </div>
    </>
  );
}

export default VLAPayments;
