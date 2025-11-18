import React, { lazy, Suspense } from "react";
import styles from "./Reports.module.css";
import { Route, Routes } from "react-router-dom";
import NewCollections from "./NewCollections";
import SquareTableSkeleton from "@/SkeletonLoaders/SquareTableSkeleton";

const ReportRMRD = lazy(() => import('./ReportRMRD'))


function RMRD({ navigate }) {
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
                  onClick={() => navigate("/reports/rmrd/new-collection")}
                >
                  New Collection
                </button>
                <button
                  className={styles.reportButton}
                  onClick={() => navigate("/reports/rmrd/rmrd-report")}
                >
                  Report
                </button>
              </>
            }
          />
          <Route
            path="/new-collection"
            element={<NewCollections navigate={navigate} />}
          />
          <Route
            path="/rmrd-report"
            element={
              <Suspense fallback={<SquareTableSkeleton />}>
                <ReportRMRD navigate={navigate} />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default RMRD;
