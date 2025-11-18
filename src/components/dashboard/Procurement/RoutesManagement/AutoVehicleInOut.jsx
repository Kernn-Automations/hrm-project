import React from 'react'
import styles from './Routes.module.css'

function AutoVehicleInOut() {
    return (
        <>
            <div className={styles.transportTable}>
                <table className="square-table">
                    <thead >
                        <tr>
                            <th>S.No</th>
                            <th>Date</th>
                            <th>Dairy</th>
                            <th>Shift</th>
                            <th>Route Name</th>
                            <th>Route Code</th>
                            <th>Schedule Time</th>
                            <th>Arrival Time</th>
                            <th>Dump start time</th>
                            <th>Dump end time</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td>1</td>
                            <td>R001</td>
                            <td>Vijayawada</td>
                            <td>40</td>
                            <td>40</td>
                            <td>80</td>
                            <td>30</td>
                            <td>30</td>
                            <td>200</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>R001</td>
                            <td>Vijayawada</td>
                            <td>40</td>
                            <td>40</td>
                            <td>80</td>
                            <td>30</td>
                            <td>30</td>
                            <td>200</td>
                            <td>30</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AutoVehicleInOut
