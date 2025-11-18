import React from 'react';

const TableSkeleton = ({ rows = 5 }) => {
  const columns = 5;

  return (
    <div className="overflow-x-auto mt-4 px-2">
      <table className="min-w-full divide-y divide-gray-300 shadow-sm border border-gray-200 rounded-sm">
        <thead className="bg-gray-100">
          <tr>
            {Array.from({ length: columns }).map((_, idx) => (
              <th key={idx} className="px-4 py-3">
                <div className="h-3 w-24 bg-gray-300 rounded animate-pulse"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {Array.from({ length: rows }).map((_, rowIdx) => (
            <tr key={rowIdx}>
              {Array.from({ length: columns }).map((_, colIdx) => (
                <td key={colIdx} className="px-4 py-4">
                  <div className={`h-3 ${colIdx === 9 ? 'w-16' : 'w-full'} bg-gray-200 rounded animate-pulse`}></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
