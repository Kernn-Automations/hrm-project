import React from "react";

function AdminPageSkeleton() {
  return (
    <>
      <div className="flex flex-column h-screen justify-content-center align-items-center">
        <div className="w-[140px] h-[140px] animate-pulse mb-4 ">
          <div class="h-100 bg-gray-300 w-100 mb-4 rounded"></div>
        </div>
        <div class="h-[30px] bg-gray-100 rounded-full bg-gray-300 w-70 mb-4"></div>

        <div class="h-2.5 bg-gray-100 rounded-full bg-gray-300 w-55 mb-3"></div>
        <div class="h-2.5 bg-gray-100 rounded-full bg-gray-300 w-120 mb-5"></div>

        <div class="h-[20px] bg-gray-100 rounded-full bg-gray-300 w-40 mb-2"></div>
        <div class="h-2.5 bg-gray-100 rounded-full bg-gray-300 w-30 mb-4"></div>
        <div class="h-[20px] bg-gray-100 rounded-full bg-gray-300 w-40 mb-2"></div>
        <div class="h-2.5 bg-gray-100 rounded-full bg-gray-300 w-30 mb-4"></div>
        <div class="h-[20px] bg-gray-100 rounded-full bg-gray-300 w-40 mb-2"></div>
        <div class="h-2.5 bg-gray-100 rounded-full bg-gray-300 w-30 mb-4"></div>
        <div class="h-[20px] bg-gray-100 rounded-full bg-gray-300 w-40 mb-2"></div>
        <div class="h-2.5 bg-gray-100 rounded-full bg-gray-300 w-30 mb-5"></div>

        <div className="w-[180px] h-[50px] animate-pulse ">
          <div class="h-100 bg-gray-300 w-100 rounded"></div>
        </div>
      </div>
    </>
  );
}

export default AdminPageSkeleton;
