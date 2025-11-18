import React, { lazy, Suspense } from "react";
import styles from "./ProdTab.module.css";
import { Route, Routes } from "react-router-dom";
import NewMilkIndent from "./NewMilkIndent";
import SquareTableSkeleton from "@/SkeletonLoaders/SquareTableSkeleton";

const MilkRequests = lazy(() => import('./MilkRequests'))
const Approvals = lazy(() => import('./Approvals'))

function OutgoingReport({ navigate }) {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <button
                className={styles.reportButton}
                onClick={() =>
                  navigate("/productions/reports/outgoing/new-milk-indent")
                }
              >
                + New Milk Indent
              </button>
              <button
                className={styles.reportButton}
                onClick={() =>
                  navigate("/productions/reports/outgoing/milk-requests")
                }
              >
                Milk Requests
              </button>

              <button
                className={styles.reportButton}
                onClick={() =>
                  navigate("/productions/reports/outgoing/approvals")
                }
              >
                Approvals
              </button>
            </>
          }
        />
        <Route
          path="/new-milk-indent"
          element={<NewMilkIndent navigate={navigate} />}
        />
        <Route
          path="/milk-requests"
          element={
            <Suspense fallback={<SquareTableSkeleton />}>
              <MilkRequests navigate={navigate} />
            </Suspense>
          }
        />
        <Route path="/approvals" element={
          <Suspense fallback={<SquareTableSkeleton />}>
            <Approvals navigate={navigate} />
          </Suspense>
        } />
      </Routes>
    </>
  );
}

export default OutgoingReport;
