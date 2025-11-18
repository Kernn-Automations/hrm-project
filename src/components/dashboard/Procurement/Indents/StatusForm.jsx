import React from 'react'
import SidePopupBox from '@/utils/SidePopupBox'
import styles from '.././AttendanceManagement/AttendanceForm.module.css'

function StatusForm({btnClass , btnName }) {
    return (
        <>
            <SidePopupBox btnStyling={btnClass} btnText={btnName} title={"Indent Status Details"} >
                {<form className={styles.approvedForm}>
                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Date : </label>
                            <input type="date" />
                        </div>
                        <div className={styles.approvedFeild}>
                            <label>BMC's / CC's : </label>
                            <input type="text" />
                        </div>

                    </div>


                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>By : </label>
                            <input type="text" />
                        </div>
                        <div className={styles.approvedFeild}>
                            <label>Store to : </label>
                            <input type="text" />
                        </div>

                    </div>
                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Material Code : </label>
                            <input type="text" />
                        </div>
                        <div className={styles.approvedFeild}>
                            <label>Material Name : </label>
                            <input type="text" />
                        </div>

                    </div>
                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Stock in Hand : </label>
                            <input type="text" />
                        </div>
                        <div className={styles.approvedFeild}>
                            <label>Required Quantity: </label>
                            <input type="text" />
                        </div>

                    </div>

                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Required in Days : </label>
                            <input type="time" />
                        </div>
                        {/* <div className={styles.approvedFeild}>
                            <label>Leave Type : </label>
                            <input type="time" />
                        </div> */}
                    </div>
                    <label>Reason : </label>
                    <textarea rows="2" />

                    <div className={styles.approvedActions}>
                        {/* <button type="submit" className={styles.approveBtn}>Approve</button>
                                    <button type="button" className={styles.declineBtn}>Decline</button> */}

                        {btnName === "Pending" && <button type="button" className={styles.editButton}>Edit</button>}
                    </div>
                </form>}
            </SidePopupBox>
        </>
    )
}

export default StatusForm
