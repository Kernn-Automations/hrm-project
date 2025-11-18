import React from 'react'

function SquareTableSkeleton({ rows = 2 }) {
    return (
        <>
            {/* <div className="p-6 max-w-3xl mx-auto animate-pulse">
                <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200 bg-white">
                        <thead className="bg-gray-100">
                            <tr>
                                {Array.from({ length: 3 }).map((_, idx) => (
                                    <th key={idx} className="px-2 py-2">
                                        <div className="h-8 w-18 bg-gray-200 rounded"></div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {[...Array(3)].map((_, rowIdx) => (
                                <tr key={rowIdx} className="bg-white">
                                    <td className="px-2 py-2">
                                        <div className="h-6 w-18 bg-gray-300 rounded"></div>
                                    </td>
                                    <td className="px-2 py-2">
                                        <div className="h-8 w-30 bg-gray-300 rounded"></div>
                                    </td>
                                    <td className="px-2 py-2">
                                        <div className="h-8 w-30 bg-gray-300 rounded-full"></div>
                                    </td>
                                    <td className="px-2 py-2">
                                        <div className="h-8 w-30 bg-gray-300 rounded-full"></div>
                                    </td>
                                    <td className="px-2 py-2">
                                        <div className="h-8 w-30 bg-gray-300 rounded-full"></div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div> */}

            <div className='flex flex-column justify-content-center p-3 m-auto align-items-center'>
                <div className='w-75 h-[40px] animate-pulse mb-1'>
                    <div className='h-100 bg-gray-100 w-100 mb-1'>

                    </div>
                </div>
                <div className='w-75 h-[40px] animate-pulse mb-1'>
                    <div className='h-100 bg-gray-100 w-100 mb-1'>

                    </div>
                </div>
                <div className='w-75 h-[40px] animate-pulse mb-1'>
                    <div className='h-100 bg-gray-100 w-100 mb-1'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SquareTableSkeleton
