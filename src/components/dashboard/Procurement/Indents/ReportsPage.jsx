import React, { lazy, Suspense } from "react";
import styles from "./ReportsPage.module.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import SquareTableSkeleton from "@/SkeletonLoaders/SquareTableSkeleton";


const Reports = lazy(() => import('./Reports'))
const ReportsConsumption = lazy(() => import('./ReportsConsumption'))

export default function ReportsPage() {
  const navigate = useNavigate();


  return (
    <div className={styles.pageContainer}>
      <Routes>
        <Route
          index
          element={
            <>
              <button
                className={styles.reportButton}
                onClick={() => navigate("/indents/report/consumption")}
              >
                Consumption
              </button>
              <button
                className={styles.reportButton}
                onClick={() => navigate("/indents/report/return")}
              >
                Return
              </button>
            </>
          }
        />
        <Route path="/consumption" element={
          <Suspense fallback={<SquareTableSkeleton />}>
            <ReportsConsumption />
          </Suspense>
        } />
        <Route path="/return" element={
          <Suspense fallback={<SquareTableSkeleton />}>
            <Reports />
          </Suspense>
        } />
      </Routes>
    </div>
  );
}
