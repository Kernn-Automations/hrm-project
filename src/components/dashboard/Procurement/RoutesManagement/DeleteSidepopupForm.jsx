import React from 'react'
// import styles from '../AttendanceForm.module.css';
import styles from '../AttendanceManagement/AttendanceForm.module.css'
import SidePopupBox from '@/utils/SidePopupBox'

function DeleteSidepopupForm({ btnName }) {
    return (
        <>
        
            <SidePopupBox  open={true} btnStyling={styles.viewButtonRequest} btnText={btnName} title={"Delete Route"}>

                {/* <div className={styles.overlay}>
                    <div className={styles.popup}>
                        <div className={styles.header}>
                            <h3>Delete Route</h3>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="">Route Name : </label>
                            <input type="text" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="">Route Code : </label>
                            <input type="text" />
                        </div>

                        <div className={styles.warning}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" fill="#D9D9D9" />
                                <mask id="mask0_23_987" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="1" width="24" height="22">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2.5L1 21.5H23L12 2.5Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                    <path d="M12 17.5V18M12 9.5L12.004 14.5" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                </mask>
                                <g mask="url(#mask0_23_987)">
                                    <path d="M0 0H24V24H0V0Z" fill="#BAAF2D" />
                                </g>
                            </svg>
                            Do you want to delete
                        </div>

                        <div className={styles.buttonGroup}>
                            <button className={styles.deleteBtn}>Delete</button>
                            <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
                        </div>
                    </div>
                </div>
                 */}



                {<form className={styles.approvedForm}>
                    {/* <label>Date : </label>
                    <input type="date" />

                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Actual IN : </label>
                            <input type="time" />
                        </div>
                        <div className={styles.approvedFeild}>
                            <label>Actual OUT : </label>
                            <input type="time" />
                        </div>

                    </div>

                    <label>Shift : </label>
                    <input type="text" placeholder="G1 / G2 / G3" />

                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Half : </label>
                            <div style={{ display: "flex", gap: "10px" }}>
                                <input type="text" placeholder="PH / FH / SH" />
                                <input type="text" placeholder="PH / FH / SH" />
                            </div>
                        </div>

                    </div>


                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Request IN : </label>
                            <input type="time" />
                        </div>
                        <div className={styles.approvedFeild}>
                            <label>Request OUT : </label>
                            <input type="time" />
                        </div>
                    </div>

                    <label>Work Hours : </label>
                    <input type="text" />

                    <label>Reason : </label>
                    <textarea rows="2" />

                    <div className={styles.approvedActions}> */}
                        <button type="submit" className={styles.approveBtn}>Create</button>
                        <button type="button" className={styles.declineBtn}>Cancel</button>
                    {/* </div> */}
                </form>}
            </SidePopupBox>
        </>
    )
}

export default DeleteSidepopupForm


