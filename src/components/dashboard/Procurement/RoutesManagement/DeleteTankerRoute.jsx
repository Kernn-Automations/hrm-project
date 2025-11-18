import React from 'react'
import styles from './Routes.module.css'

function DeleteTankerRoute() {
    return (
        <>
        
            <div className={styles.transportTable}>
                <table className="square-table">
                    <thead >
                        <tr>
                            <th>S.No</th>
                            <th>Route Code</th>
                            <th>Route Name</th>
                            <th>Driver Name</th>
                            <th>Total No.Of Kms</th>
                            <th>Rate/Km</th>
                            <th>No Of Stops</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className={styles.transportBody}>
                        <tr>
                            <td>1</td>
                            <td>R001</td>
                            <td>Hyd</td>
                            <td>Karthik</td>
                            <td>245</td>
                            <td>12</td>
                            <td>2</td>
                            <td className={styles.deleteBtn}>Delete</td>
                        </tr>
                        
                        <tr>
                            <td>1</td>
                            <td>R001</td>
                            <td>Hyd</td>
                            <td>Karthik</td>
                            <td>245</td>
                            <td>12</td>
                            <td>2</td>
                            <td className={styles.deleteBtn}>Delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default DeleteTankerRoute
