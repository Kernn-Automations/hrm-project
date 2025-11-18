import React from 'react'

function ReimbursementRequests() {
    return (
        <>
            <div className="d-flex justify-content-center p-3">
                <table className='square-table'>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Employee Name</th>
                            <th>Department</th>
                            <th>Amount</th>
                            <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>19-07-2025</td>
                            <td>00:00</td>
                            <td>Karthik</td>
                            <td>Sales</td>
                            <td>1,000</td>
                            <td>Completed</td>     
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ReimbursementRequests
