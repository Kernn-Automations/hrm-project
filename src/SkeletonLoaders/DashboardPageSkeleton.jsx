import React from "react";

function DashboardPageSkeleton() {
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div className="w-[80px] h-100 animate-pulse ">
          <div class="h-100 bg-gray-300 w-100 mb-4"></div>
        </div>
        <div className="w-[100%] h-[70px] animate-pulse ">
          <div class="h-100 bg-gray-300 w-100 mb-4"></div>
        </div>
      </div>
    </>
  );
}

export default DashboardPageSkeleton;
