import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import styles from './CentralPopupBox.module.css'

const CentralPopupBox = forwardRef(({ btnName, btnClass, children }, ref) => {

    const [isOpen, setIsOpen] = useState(false);

    const closePopup = () => setIsOpen(false)

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);


    useImperativeHandle(ref, () => ({
        closePopup,
    }));
    return (
        <>

            <button onClick={() => setIsOpen(true)} className={btnClass}>
                {btnName}
            </button>

            {isOpen && (
                <div className={styles.popupOverLay} onClick={() => setIsOpen(false)}>
                    <div className={styles.popupBox} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                            <i class="bi bi-x"></i>
                        </button>
                        {children}
                    </div>
                </div>
            )}

        </>
    );
})


export default CentralPopupBox
