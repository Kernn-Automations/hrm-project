import React, { lazy, Suspense } from "react";
import styles from "./FinanceVLA.module.css";
import { Route, Routes } from "react-router-dom";
import SquareTableSkeleton from "@/SkeletonLoaders/SquareTableSkeleton";

const MilkBill = lazy(() => import('./MilkBill'))
const PendingAmount = lazy(() => import('./PendingAmount'))

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
                  onClick={() => navigate("/vlas/vla-payments/milk-bill")}
                >
                  Milk Bill
                </button>
                <button
                  className={styles.reportButton}
                  onClick={() => navigate("/vlas/vla-payments/pending-amount")}
                >
                  Pending Amount
                </button>
              </>
            }
          />
          {/* <Route
            path="/new-collection"
            element={<NewCollections navigate={navigate} />}
          /> */}
          <Route path="/milk-bill" element={
            <Suspense fallback={<SquareTableSkeleton />}>
              <MilkBill navigate={navigate} />
            </Suspense>
          } />
          <Route
            path="/pending-amount"
            element={
              <Suspense fallback={<SquareTableSkeleton />}>
                <PendingAmount navigate={navigate} />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default VLAPayments;
