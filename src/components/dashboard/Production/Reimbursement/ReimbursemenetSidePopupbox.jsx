import SidePopupBox from '@/utils/SidePopupBox'
import React from 'react'
import styles from '../../../../components/dashboard/Procurement/AttendanceManagement/AttendanceForm.module.css'



function ReimbursemenetSidePopupbox({ btnName }) {
    return (
        <>
            <SidePopupBox btnStyling={styles.viewButtonRequest} btnText={btnName} title={"Approvals"} >
                {<form className={styles.approvedForm}>
                    <label>Date : </label>
                    <input type="date" />

                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Time : </label>
                            <input type="time" />
                        </div>
                        <div className={styles.approvedFeild}>
                            <label>By : </label>
                            <input type="time" />
                        </div>

                    </div>

                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Employee ID : </label>
                            <input type="text" placeholder="" />
                        </div>
                        <div className={styles.approvedFeild}>
                            <label>Employee Name : </label>
                            <input type="text" placeholder="" />
                        </div>

                    </div>

                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Department : </label>
                            <input type="text" placeholder="" />
                        </div>
                        <div className={styles.approvedFeild}>
                            <label>Expenditure Date : </label>
                            <input type="text" placeholder="" />
                        </div>

                    </div>




                    {/* <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Half : </label>
                            <div style={{ display: "flex", gap: "10px" }}>
                                <input type="text" placeholder="PH / FH / SH" />
                                <input type="text" placeholder="PH / FH / SH" />
                            </div>
                        </div>

                    </div> */}


                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Amount : </label>
                            <input type="text" />
                        </div>
                        <div className={styles.approvedFeild}>
                            <label>Subject : </label>
                            <input type="text" />
                        </div>
                    </div>

                    

                    <label>Description : </label>
                    <textarea rows="2" />

                    <div className={styles.approvedActions}>
                        <button type="submit" className={styles.approveBtn}>Approve</button>
                        <button type="button" className={styles.declineBtn}>Decline</button>
                    </div>
                </form>}
            </SidePopupBox>

        </>
    )
}

export default ReimbursemenetSidePopupbox
