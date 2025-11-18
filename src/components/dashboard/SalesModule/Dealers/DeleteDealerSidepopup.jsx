import React from 'react'
import SidePopupBox from '@/utils/SidePopupBox'
import styles from '../../../../components/dashboard/Procurement/AttendanceManagement/AttendanceForm.module.css'



function DeleteDealerSidepopup({ btnName }) {
    return (
        <>
            <SidePopupBox btnStyling={styles.viewButtonRequest} btnText={btnName} title={"Delete Vendor"} >
                {<form className={styles.approvedForm}>


                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Enterprise Name : </label>
                            <input type="text" />
                        </div>
                        <div className={styles.approvedFeild}>
                            <label>Enterprise Code : </label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Vendor Name : </label>
                            <input type="text" />
                        </div>
                        <div className={styles.approvedFeild}>
                            <label>Mobile Number : </label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className={styles.approvedFeild}>
                        <label>Email ID : </label>
                        <input type="text" />
                    </div>



                    <div className={styles.approvedActions}>
                        <button type="submit" className={styles.approveBtn}>Delete</button>
                        <button type="button" className={styles.declineBtn}>Cancel</button>
                    </div>
                </form>}
            </SidePopupBox>
        </>
    )
}

export default DeleteDealerSidepopup
