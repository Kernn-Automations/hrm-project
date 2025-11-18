// // src/components/IndentStatusTray.jsx

// import React from 'react';
// import SidePopupBox from '@/utils/SidePopupBox';
// import styles from './IndentApprovalTray.module.css';

// export default function IndentStatusTray({ data, onClose }) {
//   if (!data) return null;

//   const isPending = data.status === 'Pending';

//   return (
//     <SidePopupBox title="Indent Status Details" open={true} onClose={onClose}>
//       <form className={styles.drawerForm}>
//         <div className={styles.formRow}>
//           <label>Date:</label>
//           <input value={data.date} readOnly />
//         </div>
//         <div className={styles.formRow}>
//           <label>BMC's / CC's:</label>
//           <input value={data.bmcscc} readOnly />
//         </div>
//         <div className={styles.formRow}>
//           <label>By:</label>
//           <input value={data.by} readOnly />
//         </div>
//         <div className={styles.formRow}>
//           <label>Store to:</label>
//           <input value={data.store} readOnly />
//         </div>
//         <div className={styles.formRow}>
//           <label>Material code:</label>
//           <input value={data.code} readOnly />
//         </div>
//         <div className={styles.formRow}>
//           <label>Material Name:</label>
//           <input value={data.mname} readOnly />
//         </div>
//         <div className={styles.formRow}>
//           <label>Stock in Hand:</label>
//           <input value={data.stockinhand} readOnly />
//         </div>
//         <div className={styles.formRow}>
//           <label>Required Quantity:</label>
//           <input value={data.reqquantity} readOnly />
//         </div>
//         <div className={styles.formRow}>
//           <label>Required in Days:</label>
//           <input value={data.days || ''} readOnly />
//         </div>
//         <div className={styles.formRow}>
//           <label>Reason:</label>
//           <textarea value={data.reason || ''} readOnly />
//         </div>

//         <div className={styles.footertrayButtons}>
//           {isPending && (
//             <button type="button" className={styles.approvetrayBtn}>
//               Edit
//             </button>
//           )}
//           <button type="button" className={styles.declinetrayBtn} onClick={onClose}>
//             Close
//           </button>
//         </div>
//       </form>
//     </SidePopupBox>
//   );
// }
