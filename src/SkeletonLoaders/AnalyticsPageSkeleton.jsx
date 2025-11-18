import React from "react";

function AnalyticsPageSkeleton() {
  return (
    <>
      <div className="p-3">
        <div class="h-[30px] bg-gray-100 rounded-full bg-gray-300 w-60 m-3 mb-2 "></div>
        <div class="h-2.5 bg-gray-100 rounded-full bg-gray-300 w-70 m-3 mb-4"></div>
        <div className="flex p-3 pb-1 gap-10 ">
          <div className="w-[300px] h-[140px] animate-pulse mb-4  ">
            <div class="h-100 bg-gray-300 w-100 mb-4 rounded"></div>
          </div>
          <div className="w-[300px] h-[140px] animate-pulse mb-4  ">
            <div class="h-100 bg-gray-300 w-100 mb-4 rounded"></div>
          </div>
          <div className="w-[300px] h-[140px] animate-pulse mb-4  ">
            <div class="h-100 bg-gray-300 w-100 mb-4 rounded"></div>
          </div>
          <div className="w-[300px] h-[140px] animate-pulse mb-4  ">
            <div class="h-100 bg-gray-300 w-100 mb-4 rounded"></div>
          </div>
        </div>
        <div className="flex p-3 py-1 gap-10 ">
          <div className="w-[400px] h-[250px] animate-pulse mb-4  ">
            <div class="h-100 bg-gray-300 w-100 mb-4 rounded"></div>
          </div>
          <div className="w-[400px] h-[250px] animate-pulse mb-4  ">
            <div class="h-100 bg-gray-300 w-100 mb-4 rounded"></div>
          </div>
          <div className="w-[400px] h-[250px] animate-pulse mb-4  ">
            <div class="h-100 bg-gray-300 w-100 mb-4 rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnalyticsPageSkeleton;
