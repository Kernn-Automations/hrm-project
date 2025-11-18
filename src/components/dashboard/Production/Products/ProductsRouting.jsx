import React, { lazy, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";
import ProductsHeader from "./ProductsHeader";
import SquareTableSkeleton from "@/SkeletonLoaders/SquareTableSkeleton";

const OngoingProducts = lazy(() => import('./OngoingProducts'))

function ProductsRouting() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container">
        <ProductsHeader />
        <Routes>
          <Route index element={<AddProduct navigate={navigate} />} />
          <Route path="/delete/*" element={<DeleteProduct navigate={navigate} />} />
          <Route
            path="/ongoing/*"
            element={
              <Suspense fallback={<SquareTableSkeleton />}>
                <OngoingProducts navigate={navigate} />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default ProductsRouting;
