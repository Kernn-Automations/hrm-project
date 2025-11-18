import React from 'react';

function NewTaskSkeleton() {
  return (
    <div className="max-w-xl mx-auto mt-8 p-6 rounded-lg shadow-md animate-pulse ">
      {/* Date */}
      <div className="mb-4 flex items-center justify-around">
        <div className="h-10 bg-gray-200 rounded w-80 items-center"></div>
      </div>

      {/* Time */}
      <div className="mb-4 flex items-center justify-around">
        <div className="h-10 bg-gray-200 rounded w-80"></div>
      </div>

      {/* Task To */}
      <div className="mb-4 flex items-center justify-around">
        <div className="h-10 bg-gray-200 rounded w-80"></div>
      </div>

      {/* Complete Before */}
      <div className="mb-4 flex items-center justify-around">
        <div className="h-10 bg-gray-200 rounded w-80"></div>
      </div>

      {/* Subject */}
      <div className="mb-4 flex items-center justify-around">
        {/* <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div> */}
        <div className="h-10 bg-gray-200 rounded w-80"></div>
      </div>

      {/* Task Description */}
      <div className="mb-6">
        <div className="h-16 bg-gray-200 rounded "></div>
      </div>

      {/* Buttons */}
      {/* <div className="flex space-x-4 justify-end">
        <div className="h-10 w-24 bg-gray-300 rounded"></div>
        <div className="h-10 w-24 bg-gray-300 rounded"></div>
      </div> */}
    </div>
  );
}

export default NewTaskSkeleton;
