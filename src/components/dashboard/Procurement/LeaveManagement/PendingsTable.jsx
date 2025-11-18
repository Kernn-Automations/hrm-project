// import React, { useState } from 'react';
// import SidePopupBox from '@/utils/SidePopupBox';
// import PendingsTray from './PendingsTray';
// import styles from './ApprovalsTray.module.css'

// // adjust path as needed

// const pendingRows = [
//   { id: 1, empId: 'KA0045', name: 'Karthik', FromDate: '10-10-10', ToDate: '11-10-10',reason: 'Personal work', leaveType: 'Earned Leave (EL)', noofdays: '1',type: 'AM', mobile: '9666633726', email: 'Karthik@gmail.com', status: 'Approved' },
//   { id: 2, empId: 'KA0046', name: 'Mahesh', FromDate: '11-11-11', ToDate: '15-11-11',reason: 'Medical Appointment', leaveType: 'Sick Leave (SL)', noofdays: '4', type: 'PM', mobile: '9999999999', email: 'Mahesh@gmail.com', status: 'Pending' },
//   { id: 3, empId: 'KA0047', name: 'Priya', FromDate: '12-12-12', ToDate: '14-12-12',reason: 'Family Function',leaveType: 'Casual Leave (CL)', noofdays: '2', type: 'Full Day', mobile: '9888888888', email: 'Priya@gmail.com', status: 'Declined' },
// ];

// export default function PendingsTable() {
//   const [selectedRow, setSelectedRow] = useState(null);

//   const closeTray = () => {
//     setSelectedRow(null);
//   };

//   return (
//     <>

//         <div className={styles.tableContainer}>
//           <table className="circular-table">
//             <thead>
//               <tr>
//                 <th>S.no</th>
//                 <th>Employee ID</th>
//                 <th>Name</th>
//                 <th>From Date</th>
//                 <th>To Date</th>
//                 <th>No of Days</th>
//                 <th>Mobile</th>
//                 <th>Email</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {pendingRows.map((row, idx) => (
//                 <tr className='circular-table-row' key={row.id}>
//                   <td>{idx + 1}</td>
//                   <td>{row.empId}</td>
//                   <td>{row.name}</td>
//                   <td>{row.FromDate}</td>
//                   <td>{row.ToDate}</td>
//                   <td>{row.noofdays}</td>
//                   <td>{row.mobile}</td>
//                   <td>
//                     {/* <a href={`mailto:${row.email}`} style={{ color: '#1a7db8', textDecoration: 'underline' }}>
//                       {row.email}
//                     </a> */}
//                     {row.email}
//                   </td>
//                   <td>
//                     {/* <span
//                       className={`status-badge ${row.status.toLowerCase()}`}
//                       style={{ cursor: 'pointer' }}
//                       onClick={() => setSelectedRow(row)}
//                     >
//                       {row.status}
//                     </span> */}
//                     <PendingsTray row={row} btnText={row.status} btnStyling={row.status==='Pending'? styles.pendingBtn : row.status==='Approved'? styles.approvedBtn:styles.declinedBtn}/>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Tray UI */}
//         {selectedRow && (
//           <SidePopupBox isOpen={!!selectedRow} onClose={closeTray} title="Leave Status Details">
//             {selectedRow.status === 'Pending' ? (
//               // Editable tray
//               <div className="leave-details-form">
//                 <div className="form-group">
//                   <label>Date:</label>
//                   <input type="text" value="--/--/----" readOnly />
//                 </div>
//                 <div className="form-group">
//                   <label>Employee Name:</label>
//                   <input type="text" value={selectedRow.name} readOnly />
//                 </div>
//                 <div className="form-group">
//                   <label>Type:</label>
//                   <input type="text" value={row.type} readOnly />
//                 </div>
//                 <div className="form-group row">
//                   <label>From:</label>
//                   <input type="text" value={selectedRow.FromDate} readOnly />
//                   <label>To:</label>
//                   <input type="text" value={selectedRow.ToDate} readOnly />
//                 </div>
//                 <div className="form-group">
//                   <label>No of Days:</label>
//                   <input type="text" value={selectedRow.noofdays} readOnly />
//                 </div>
//                 <div className="form-group">
//                   <label>Leave Type:</label>
//                   <input type="text" value={row.leaveType} readOnly />
//                 </div>
//                 <div className="form-group">
//                   <label>Reason:</label>
//                   <textarea value={row.reason} readOnly />
//                 </div>
//                 <div className="form-buttons">
//                   <button className="btn-edit">Edit</button>
//                   <button className="btn-cancel" onClick={closeTray}>Cancel</button>
//                 </div>
//               </div>
//             ) : (
//               // Read-only tray
//               <div className="leave-details-form">
//                 <p><strong>Date:</strong> --/--/----</p>
//                 <p><strong>Employee Name:</strong> {selectedRow.name}</p>
//                 <p><strong>Type:</strong> {selectedRow.status}</p>
//                 <p><strong>From:</strong> {selectedRow.FromDate}</p>
//                 <p><strong>To:</strong> {selectedRow.ToDate}</p>
//                 <p><strong>No of Days:</strong> {selectedRow.noofdays}</p>
//                 <p><strong>Mobile:</strong> {selectedRow.mobile}</p>
//                 <p><strong>Email:</strong> {selectedRow.email}</p>
//                 <div style={{ marginTop: '1rem', textAlign: 'center' }}>
//                   <button className="btn-cancel" onClick={closeTray}>Close</button>
//                 </div>
//               </div>
//             )}
//           </SidePopupBox>
//         )}

//     </>
//   );
// }


import React, { useState } from 'react'
// import styles from './AttendanceForm.module.css';
import styles from '../AttendanceManagement/AttendanceForm.module.css'
import PresentList from '../AttendanceManagement/PresentList';
import ApprovedForm from '../AttendanceManagement/ApprovedForm';
import RequestForm from '../AttendanceManagement/RequestForm';
import PendingsForm from './PendingsForm';
// import PresentList from './PresentList';
// import ApprovedForm from './ApprovedForm';
// import RequestForm from './RequestForm';

function PendingsTable() {

  const requestsList = [{
    sn: 1,
    id: "KA0045",
    name: "Karthik",
    fromDate: "30-07-2025",
    toDate: "10-08-2025",
    noOfDays: "2",
    mobile: "7522233390",
    email: "karthik@gmail.com",
    requestOut: "00:00",
    status: "Approved"
  }, {
    sn: 2,
    id: "KA0046",
    name: "Shanmukh",
    fromDate: "31-07-2025",
    toDate: "11-08-2025",
    noOfDays: "3",
    mobile: "7522233391",
    email: "shanmukh@gmail.com",
    requestOut: "00:00",
    status: "Pending"
  }, {
    sn: 3,
    id: "KA0047",
    name: "Hari Krishna",
    fromDate: "01-08-2025",
    toDate: "12-08-2025",
    noOfDays: "4",
    mobile: "7522233392",
    email: "harikrishna@gmail.com",
    requestOut: "00:00",
    status: "Declined"
  }]


  return (
    <>

      <div className={styles.tableContainer}>
        <table className="circular-table">

          <thead>
            <tr>
              <th>S.NO</th>
              <th>Employee ID</th>
              <th>Name</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>No Of Days</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {requestsList.map((req) => (<tr className="circular-table-row">
              <td >{req.sn}</td>
              <td>{req.id}</td>
              <td>{req.name}</td>
              <td>{req.fromDate}</td>
              <td>{req.toDate}</td>
              <td>{req.noOfDays}</td>
              <td>{req.mobile}</td>
              <td>{req.email}</td>
              <td>
                {/* <RequestForm btnName={req.status} btnClass={req.status === "Approved" ? styles.approveButton : req.status === "Pending" ? styles.holdButton : styles.declineButton} /> */}
                <PendingsForm btnName={req.status} btnClass={req.status === "Approved" ? styles.approveButton : req.status === "Pending" ? styles.holdButton : styles.declineButton} />
              </td>
              
            </tr>
            ))}
          </tbody>

        </table>
      </div>
    </>
  )
}

export default PendingsTable;

