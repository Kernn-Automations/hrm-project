import React from 'react'
import ReimbursemenetSidePopupbox from './ReimbursemenetSidePopupbox'

function ReimbursementApprovals() {
    return (
        <>
            <div className="d-flex justify-content-center p-3">
                <table className='square-table'>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Date</th>
                            <th>EmpLoyee ID</th>
                            <th>Employee Name</th>
                            <th>Department</th>
                            <th>Amount</th>
                            <th>Action</th>                         
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>19-07-2025</td>
                            <td>KM00025</td>
                            <td>Karthik</td>
                            <td>Production</td>
                            <td>1,000</td>
                            <td>
                                <ReimbursemenetSidePopupbox btnName={"view"}/>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ReimbursementApprovals
