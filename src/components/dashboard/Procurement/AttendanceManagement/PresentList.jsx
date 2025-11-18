import React from 'react'
import styles from './AttendanceForm.module.css';
import { useNavigate } from 'react-router-dom';


function PresentList() {


    const navigate = useNavigate();

    return (
        <>
            <div className={styles.summary}>
                <div className={styles.box}>
                    <div className={styles.stat} onClick={() => navigate("/attendance/present")}>
                        <p>Employee Present:</p>
                        <h2 className={styles.green}>30</h2>
                    </div>
                    <div className={styles.stat} onClick={() => navigate("/attendance/absent")}>
                        <p>Employee Absent:</p>
                        <h2 className={styles.red}>10</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PresentList
