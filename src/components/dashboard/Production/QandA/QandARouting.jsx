import React, { lazy, Suspense } from "react";
import QandAHeader from "./QandAHeader";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductsList from "./ProductsList";
import SquareTableSkeleton from "@/SkeletonLoaders/SquareTableSkeleton";

const QandAForm = lazy(() => import('./QandAForm'))

function QandARouting() {
    const navigate = useNavigate();
  return (
    <>
      <div className="main-container">
        <QandAHeader />
        <Routes>
          <Route index element={<ProductsList navigate={navigate} />} />
          <Route
            path="/qnda-form"
            element={
              <Suspense fallback={<SquareTableSkeleton/>}>
                <QandAForm navigate={navigate} />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default QandARouting;
