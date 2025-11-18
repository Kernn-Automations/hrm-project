import SidePopupBox from '@/utils/SidePopupBox'
import React from 'react'
import styles from '../../../../components/dashboard/Procurement/AttendanceManagement/AttendanceForm.module.css'


function SidePopupForm({ btnName }) {
    return (
        <>
            <SidePopupBox btnStyling={styles.viewButtonRequest} btnText={btnName} title={"Delete Shift"} >
                {<form className={styles.approvedForm}>


                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Employee Name : </label>
                            <input type="text" />
                        </div>
                        <div className={styles.approvedFeild}>
                            <label>Empolyee ID : </label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Mobile Number : </label>
                            <input type="text" />
                        </div>
                        <div className={styles.approvedFeild}>
                            <label>Role : </label>
                            <input type="text" />
                        </div>
                    </div>


                    <label>Shift : </label>
                    <select name="" id="">
                        <option value="">--select--</option>
                        <option value="">some data</option>
                        <option value="">some data</option>
                        <option value="">some data</option>
                    </select>
                   
                    <div className={styles.approvedActions}>
                        <button type="submit" className={styles.approveBtn}>Submit</button>
                        <button type="button" className={styles.declineBtn}>Cancel</button>
                    </div>
                </form>}
            </SidePopupBox>

        </>
    )
}

export default SidePopupForm
