import React from 'react'
import styles from './Routes.module.css'

function TankerVehicleInOut() {

  return (
    <>
    
      
      <div className={styles.transportTable}>
        <table className="square-table">
          <thead >
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Tanker Name</th>
              <th>Dairy Name</th>
              <th>Arrival Time</th>
              <th>Dispatch Time</th>
              <th>DC Qty</th>
              <th>DC Fat</th>
              <th>DC SNF</th>
              <th>DC CLR</th>
              <th>DC Temp</th>
              <th>DC Acidity</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td>1</td>
              <td>00-00-00</td>
              <td>Tanker 1</td>
              <td>Dairy</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>30</td>
              <td>30</td>
              <td>200</td>
              <td>30</td>
              <td>50</td>
              <td>50</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TankerVehicleInOut
