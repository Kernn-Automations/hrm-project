import React, { useRef } from 'react'
import CentralPopupBox from '@/utils/CentralPopupBox'
import styles from './Application.module.css'


function ExperiencePop() {

    const popupRef = useRef();

    const handleNoClick = () => {
        popupRef.current.closePopup(); // Close from child
    };

    return (
        <>
            <CentralPopupBox btnName={"Apply"} btnClass={styles.submitButton} ref={popupRef}>
                <p className={styles.popText}>Are you sure you want to apply <span>Experience Latter</span></p>
                <button className={styles.yesButton}>Yes</button>
                <button className={styles.noButton} onClick={handleNoClick} >NO</button>
            </CentralPopupBox>
        </>
    )
}

export default ExperiencePop
