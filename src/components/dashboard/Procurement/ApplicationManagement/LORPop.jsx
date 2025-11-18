import React, { useRef } from 'react'
import CentralPopupBox from '@/utils/CentralPopupBox'
import styles from './Application.module.css'

function LORPop() {

    const popupRef = useRef();
    
        const handleNoClick = () => {
            popupRef.current.closePopup(); // Close from child
        };

    return (
        <>
            <CentralPopupBox btnName={"Apply"} btnClass={styles.submitButton} ref={popupRef}>
                <p className={styles.popText}>Are you sure you want to apply <span>LOR</span></p>
                <button className={styles.yesButton}>Yes</button>
                <button className={styles.noButton} onClick={handleNoClick}>No</button>
            </CentralPopupBox>
        </>
    )
}

export default LORPop
