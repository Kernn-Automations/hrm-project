import React from 'react'
import StoreDeletePopup from './StoreDeletePopup'

function StoreDelete() {
    return (
        <>
            <div className="d-flex justify-content-center p-3">
                <table className="square-table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Store Name</th>
                            <th>Store Code</th>
                            <th>Store Incharge</th>
                            <th>Incharge ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        // key={product.id}
                        // className="animated-row"
                        // style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <td>1</td>
                            <td>Store One</td>
                            <td>IN0099</td>
                            <td>Incharge 1</td>
                            <td>V3333</td>
                            <td>
                                <StoreDeletePopup btnName={"View"} />
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default StoreDelete
