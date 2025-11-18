import React from 'react'
import CentralPopupBox from '@/utils/CentralPopupBox'
import styles from './Application.module.css'

function PaySlipPop() {
    return (
        <>
            <CentralPopupBox btnName={"Apply"} btnClass={styles.submitButton}>
                <div className={styles.paySlipCotainer}>
                    <div className={styles.popForm}>
                        <label htmlFor="">Month : </label>
                        <select name="" id="">
                            <option value="">--select--</option>
                            <option value="">January</option>
                            <option value="">February</option>
                            <option value="">March</option>
                        </select>
                    </div>
                    <div className={styles.popForm}>
                        <label htmlFor="">Year : </label>
                        <select name="" id="">
                            <option value="">--select--</option>
                            <option value="">2021</option>
                            <option value="">2022</option>
                            <option value="">2023</option>
                            <option value="">2024</option>
                            <option value="">2025</option>
                        </select>
                    </div>
                    <div className={styles.popForm}>
                        <button className={styles.paySlipBtn}>Submit</button>
                    </div>
                </div>
            </CentralPopupBox>
        </>
    )
}

export default PaySlipPop
