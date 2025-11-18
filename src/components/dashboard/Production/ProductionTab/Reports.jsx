import React, { lazy, Suspense } from "react";
import styles from "./ProdTab.module.css";
import { Route, Routes } from "react-router-dom";
import SquareTableSkeleton from "@/SkeletonLoaders/SquareTableSkeleton";
import DropdownSkeleton from "@/SkeletonLoaders/DropdownSkeleton";

const IncomingReport = lazy(() => import('./IncomingReport'))
const OutgoingReport = lazy(() => import('./OutgoingReport'))

function Reports({ navigate }) {
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
                  onClick={() => navigate("/productions/reports/incoming")}
                >
                  Incoming
                </button>
                <button
                  className={styles.reportButton}
                  onClick={() => navigate("/productions/reports/outgoing")}
                >
                  Outgoing
                </button>
              </>
            }
          />
          <Route
            path="/incoming"
            element={
              <Suspense fallback={<SquareTableSkeleton />}>
                <IncomingReport navigate={navigate} />
              </Suspense>
            }
          />
          <Route
            path="/outgoing/*"
            element={
              <Suspense fallback={<DropdownSkeleton />}>
                <OutgoingReport navigate={navigate} />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default Reports;
