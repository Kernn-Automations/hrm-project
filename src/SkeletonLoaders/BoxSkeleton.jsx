import React from "react";

function BoxSkeleton() {
  return (
    <>
      <div className="flex justify-content-around p-3 m-auto align-items-center">
        <div className="w-[300px] h-[250px] animate-pulse mb-3">
          <div className="h-100 bg-gray-100 w-100 mb-2 rounded"></div>
        </div>
        <div className="w-[300px] h-[250px] animate-pulse mb-3">
          <div className="h-100 bg-gray-100 w-100 mb-2 rounded"></div>
        </div>
        <div className="w-[300px] h-[250px] animate-pulse mb-3">
          <div className="h-100 bg-gray-100 w-100 mb-2 rounded"></div>
        </div>
      </div>
    </>
  );
}

export default BoxSkeleton;
