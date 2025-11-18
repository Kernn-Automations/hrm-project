import SidePopupBox from '@/utils/SidePopupBox'
import React from 'react'
import styles from '../../../../components/dashboard/Procurement/AttendanceManagement/AttendanceForm.module.css'


function StoreDeletePopup({ btnName }) {
    return (
        <>
            <SidePopupBox btnStyling={styles.viewButtonRequest} btnText={btnName} title={"Delete Store"} >
                {<form className={styles.approvedForm}>


                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Store Name : </label>
                            <input type="text" />
                        </div>
                        <div className={styles.approvedFeild}>
                            <label>Store Code : </label>
                            <input type="text" />
                        </div>
                    </div>


                    <div className={styles.approvedActions}>
                        <button type="button" className={styles.declineBtn}>Delete</button>
                        <button type="submit" className={styles.approveBtn}>Cancle</button>

                    </div>
                </form>}
            </SidePopupBox>
        </>
    )
}

export default StoreDeletePopup
