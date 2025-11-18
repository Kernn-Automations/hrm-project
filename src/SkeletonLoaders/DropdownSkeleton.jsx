import React from "react";

function DropdownSkeleton() {
  return (
    <>
      <div className="flex flex-column justify-content-center p-3 m-auto align-items-center">
        <div className="w-50 h-[100px] animate-pulse mb-3">
          <div className="h-100 bg-gray-100 w-100 mb-2 rounded"></div>
        </div>
        <div className="w-50 h-[100px] animate-pulse mb-3">
          <div className="h-100 bg-gray-100 w-100 mb-2 rounded"></div>
        </div>
        <div className="w-50 h-[100px] animate-pulse mb-3">
          <div className="h-100 bg-gray-100 w-100 mb-2 rounded"></div>
        </div>
      </div>
    </>
  );
}

export default DropdownSkeleton;
