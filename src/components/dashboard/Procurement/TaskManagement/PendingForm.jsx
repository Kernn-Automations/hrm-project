import React, { useState } from 'react'
import SidePopupBox from '@/utils/SidePopupBox'
import styles from './TaskManagement.module.css'
import PendingFormTwo from './PendingFormTwo'


function PendingForm({ btnClass, btnName }) {
    const [completeclick, setCompleteclick] = useState(false);
    const onCompleteClick = () => setCompleteclick(!completeclick)

    // const onSubmitClick = (e) => e.stopPropagation()
// 
    return (
        <>

            <SidePopupBox btnStyling={btnClass} btnText={btnName} title={"Pending Tasks"} >
                {!completeclick && <form className={styles.approvedForm}  onSubmit={(e) => { e.preventDefault() }}>
                    <label>Date : </label>
                    <input type="date" />

                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Time : </label>
                            <input type="time" />
                        </div>
                        {/* <div className={styles.approvedFeild}>
                            <label>Actual OUT : </label>
                            <input type="time" />
                        </div> */}

                    </div>

                    <label>Given By : </label>
                    <input type="text" placeholder="" />

                    <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Last Date to Submit : </label>
                            <div style={{ display: "flex", gap: "10px" }}>
                                <input type="text" placeholder="PH / FH / SH" />
                                {/* <input type="text" placeholder="PH / FH / SH" /> */}
                            </div>
                        </div>

                    </div>


                    {/* <div className={styles.approvedRow}>
                        <div className={styles.approvedFeild}>
                            <label>Request IN : </label>
                            <input type="time" />
                        </div>
                        <div className={styles.approvedFeild}>
                            <label>Request OUT : </label>
                            <input type="time" />
                        </div>
                    </div> */}

                    <label>Subject : </label>
                    <input type="text" />

                    <label>Description : </label>
                    <textarea rows="2" />

                    <div className={styles.approvedActions}>
                        <button className={styles.approveBtn}>Cancel</button>
                        <button onClick={onCompleteClick} className={styles.declineBtn}>Completed</button>


                        {/* {btnName === "Hold" && <button type="button" className={styles.editButton}>Edit</button>} */}
                    </div>
                </form>}
                {completeclick && <PendingFormTwo />}
            </SidePopupBox>
        </>
    )
}

export default PendingForm
