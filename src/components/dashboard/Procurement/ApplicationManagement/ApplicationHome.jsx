import React from 'react'
import styles from './Application.module.css'
import CentralPopupBox from '@/utils/CentralPopupBox'
import ExperiencePop from './ExperiencePop'
import LORPop from './LORPop'
import PaySlipPop from './PaySlipPop'

function ApplicationHome() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <h3>Pay Slips</h3>
                        {/* <label htmlFor="">Month : </label>
                        <input type="text" placeholder='Enter Month' />
                        <label htmlFor="">Year : </label>
                        <input type="text" placeholder='Enter Year' /> */}

                        {/* <button className={styles.submitButton}>Apply</button> */}
                        <PaySlipPop />

                    </div>

                    <div className={styles.card}>
                        <h3>Experience Letter</h3>
                        {/* <label htmlFor="">Month : </label>
                        <input type="text" placeholder='Enter Month' />
                        <label htmlFor="">Year : </label>
                        <input type="text" placeholder='Enter Year' /> */}
                        {/* <button className={styles.submitButton}>Apply</button> */}
                        <ExperiencePop />
                    </div>

                    <div className={styles.card}>
                        <h3>LOR</h3>
                        {/* <label htmlFor="">Month : </label>
                        <input type="text" placeholder='Enter Month' />
                        <label htmlFor="">Year : </label>
                        <input type="text" placeholder='Enter Year' /> */}
                        {/* <button className={styles.submitButton}>Apply</button> */}
                        <LORPop />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApplicationHome
