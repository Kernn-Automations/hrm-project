import React, { lazy, Suspense } from "react";
import styles from "./Purchases.module.css";
import { Route, Routes } from "react-router-dom";
import AddVendorForm from "./AddVendorForm";
import SquareTableSkeleton from "@/SkeletonLoaders/SquareTableSkeleton";

const OngoingVendors = lazy(() => import('./OngoingVendors'))

function Vendors({ navigate }) {
  return (
    <>
      <div className={styles.pageContainer}>
        <Routes>
          <Route
            index
            element={
              <>
                <AddVendorForm
                  btnName={"Add Vendor"}
                  btnStyling={styles.reportButton}
                />
                <button
                  className={styles.reportButton}
                  onClick={() => navigate("/purchases/vendors/ongoing-vendors")}
                >
                  Ongoing Vendors
                </button>
              </>
            }
          />
          {/* <Route
            path="/new-collection"
            element={<NewCollections navigate={navigate} />}
          /> */}
          <Route
            path="/ongoing-vendors"
            element={
              <Suspense fallback={<SquareTableSkeleton />}>
                <OngoingVendors navigate={navigate} />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default Vendors;
