import BootstrapSwitch from '@/utils/BootstrapSwitch'
import React from 'react'

function DealerManage() {
    return (
        <>
            <div className='d-flex justify-content-center p-3'>
                <table className='square-table'>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Enterprise Name</th>
                            <th>Enterprise Code</th>
                            <th>Vendor Name</th>
                            <th>Mobile Number</th>
                            <th>Enable/Disable</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Karthik</td>
                            <td>KEMP004</td>
                            <td>Karthik</td>
                            <td>1234567890</td>
                            <td>
                                <BootstrapSwitch />

                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Karthik</td>
                            <td>KEMP004</td>
                            <td>Karthik</td>
                            <td>1234567890</td>
                            <td>
                                <BootstrapSwitch />

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DealerManage
