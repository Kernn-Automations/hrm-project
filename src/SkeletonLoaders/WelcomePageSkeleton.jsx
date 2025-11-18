import React from "react";

function WelcomePageSkeleton() {
  return (
    <>
      <div className="flex flex-column h-screen justify-content-center align-items-center">
        <div className="w-[140px] h-[140px] animate-pulse mb-4 ">
          <div class="h-100 bg-gray-300 w-100 mb-4 rounded"></div>
        </div>
        <div class="h-[20px] bg-gray-100 rounded-full bg-gray-300 w-40 mb-4"></div>
        <div className="w-[180px] h-[50px] animate-pulse ">
          <div class="h-100 bg-gray-300 w-100 mb-4 rounded"></div>
        </div>
      </div>
    </>
  );
}

export default WelcomePageSkeleton;
