import React from 'react'
import styles from './Routes.module.css'

function TransportReportTankerRoute() {
  return (
    <>
      <div className={styles.transportContainer}>
        <div className={styles.transportForm}>
          <label htmlFor="">Month : </label>
          <input type="text" />
          <label htmlFor="">Dairy : </label>
          <input type="text" />
          <button className={styles.submitBtn}>Submit</button>
          <button className={styles.cancelBtnTransport}>Cancel</button>
        </div>

        <div className={styles.exportButtons}>
          <button className={styles.excelBtn}>
            <span>Export To</span>
            <svg width="25" height="25" viewBox="0 0 34 37" fill="black" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_27_1345" maskType="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="37">
                <path d="M4.5 10.625V2.75C4.5 2.28587 4.68437 1.84075 5.01256 1.51256C5.34075 1.18437 5.78587 1 6.25 1H30.75C31.2141 1 31.6592 1.18437 31.9874 1.51256C32.3156 1.84075 32.5 2.28587 32.5 2.75V34.25C32.5 34.7141 32.3156 35.1592 31.9874 35.4874C31.6592 35.8156 31.2141 36 30.75 36H6.25C5.78587 36 5.34075 35.8156 5.01256 35.4874C4.68437 35.1592 4.5 34.7141 4.5 34.25V26.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M24.625 10.625H27.25M22 17.625H27.25M22 24.625H27.25" stroke="white" stroke-width="2" stroke-linecap="round" />
                <path d="M1 10.625H16.75V26.375H1V10.625Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.25 15.875L11.5 21.125M11.5 15.875L6.25 21.125" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </mask>
              <g mask="url(#mask0_27_1345)">
                <path d="M-2.5 -2.5H39.5V39.5H-2.5V-2.5Z" fill="white" />
              </g>
            </svg>

          </button>
          <button className={styles.printBtn}>
            <span>Export To</span>
            <svg width="25" height="25" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 6.66667H7V0H28V6.66667ZM28 15.8333C28.4958 15.8333 28.9117 15.6733 29.2477 15.3533C29.5837 15.0333 29.7512 14.6378 29.75 14.1667C29.7488 13.6956 29.5808 13.3 29.246 12.98C28.9112 12.66 28.4958 12.5 28 12.5C27.5042 12.5 27.0888 12.66 26.754 12.98C26.4192 13.3 26.2512 13.6956 26.25 14.1667C26.2488 14.6378 26.4168 15.0339 26.754 15.355C27.0912 15.6761 27.5065 15.8356 28 15.8333ZM24.5 26.6667V20H10.5V26.6667H24.5ZM28 30H7V23.3333H0V13.3333C0 11.9167 0.510417 10.7294 1.53125 9.77167C2.55208 8.81389 3.79167 8.33444 5.25 8.33333H29.75C31.2375 8.33333 32.4847 8.81278 33.4915 9.77167C34.4983 10.7306 35.0012 11.9178 35 13.3333V23.3333H28V30Z" fill="white" />
            </svg>

          </button>
        </div>



      </div>




      <div className={styles.transportTable}>
        <table className='square-table'>
          <thead >
            <tr>
              <th>S.No</th>
              <th>Route Code</th>
              <th>Route Name</th>
              <th>Transport Amount</th>
              <th>Total No.Of Kms</th>
              <th>Rate/Km</th>
              <th>Qty of Milk</th>
              <th>Cost / ltr</th>
            </tr>
          </thead>
          <tbody className={styles.transportBody}>
            <tr>
              <td>1</td>
              <td>1234</td>
              <td>Hyd</td>
              <td>15000</td>
              <td>240</td>
              <td>12</td>
              <td>2</td>
              <td>35</td>

            </tr>
            <tr>
              <td>1</td>
              <td>1234</td>
              <td>Hyd</td>
              <td>15000</td>
              <td>240</td>
              <td>12</td>
              <td>2</td>
              <td>35</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TransportReportTankerRoute
