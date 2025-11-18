import React, { useState } from 'react'
import styles from './Routes.module.css'

function AddRouteForm() {

    const [stops, setStops] = useState([
        { dairyName: '', dairyCode: '', noOfKms: '' }
    ]);

    const addStop = () => {
        setStops([...stops, { dairyName: '', dairyCode: '', noOfKms: '' }]);
    };

    const removeStop = (indexToRemove) => {
        setStops((prevStops) => prevStops.filter((_, i) => i !== indexToRemove));
    };

    return (
        <>
            <form className={styles.addContainer}>
                <div className={styles.addColumn}>
                    <div className={styles.formRow}>
                        <label htmlFor="">Route Code : </label>
                        <input type="text" />
                    </div>

                    <div className={styles.formRow}>
                        <label htmlFor="">Route Name : </label>
                        <input type="text" />
                    </div>

                    <div className={styles.formRow}>
                        <label htmlFor="">Driver Name : </label>
                        <input type="text" />
                    </div>

                    <div className={styles.formRow}>
                        <label htmlFor="">Total Kms : </label>
                        <input type="text" />
                    </div>

                    <div className={styles.formRow}>
                        <label htmlFor="">Rate/Km : </label>
                        <input type="text" />
                    </div>

                    <div>
                        <button className={styles.createdButton} onClick={(e) => e.preventDefault()}>Create</button>
                        <button className={styles.cancelButton} onClick={(e) => e.preventDefault()}>Cancel</button>
                    </div>
                </div>

                <div className={styles.addColumn}>
                    {stops.map((stop, index) => (
                        <div key={index} className={styles.stopBox}>
                            <div className={styles.stopHeader}>

                                <div className={styles.leftSection}>
                                    <svg width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.507 40.5C18.6043 40.5 15.8743 39.9756 13.317 38.9267C10.7612 37.8763 8.53755 36.4511 6.646 34.6511C4.75444 32.8511 3.25722 30.7356 2.15433 28.3044C1.05144 25.8733 0.5 23.2741 0.5 20.5067C0.5 17.7393 1.05144 15.1393 2.15433 12.7067C3.25567 10.2726 4.74978 8.15481 6.63667 6.35333C8.52355 4.55185 10.7457 3.12593 13.303 2.07556C15.8603 1.02519 18.5903 0.5 21.493 0.5C24.3957 0.5 27.1257 1.02519 29.683 2.07556C32.2388 3.12444 34.4624 4.54815 36.354 6.34667C38.2456 8.14518 39.7428 10.2615 40.8457 12.6956C41.9486 15.1296 42.5 17.7289 42.5 20.4933C42.5 23.2578 41.9493 25.8578 40.848 28.2933C39.7467 30.7289 38.2502 32.8467 36.3587 34.6467C34.4671 36.4467 32.2458 37.8726 29.6947 38.9244C27.1436 39.9763 24.4143 40.5015 21.507 40.5Z" fill="#386BB9" />
                                    </svg>
                                    <h4>Stop - {index + 1}</h4>

                                </div>

                                <svg width="29" height="34" viewBox="0 0 29 34" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => removeStop(index)}>
                                    <path d="M2.07143 30.2222C2.07143 32.3 3.93571 34 6.21429 34H22.7857C25.0643 34 26.9286 32.3 26.9286 30.2222V7.55556H2.07143V30.2222ZM29 1.88889H21.75L19.6786 0H9.32143L7.25 1.88889H0V5.66667H29V1.88889Z" fill="#A2A2A2" />
                                </svg>
                            </div>

                            <div className={styles.formRow}>
                                <label>Dairy Name:</label>
                                <input
                                    value={stop.dairyName}
                                    onChange={(e) => handleStopChange(index, 'dairyName', e.target.value)}
                                />
                            </div>

                            <div className={styles.formRow}>
                                <label>Dairy Code:</label>
                                <input
                                    value={stop.dairyCode}
                                    onChange={(e) => handleStopChange(index, 'dairyCode', e.target.value)}
                                />
                            </div>

                            <div className={styles.formRow}>
                                <label>No of Kms:</label>
                                <input
                                    value={stop.noOfKms}
                                    onChange={(e) => handleStopChange(index, 'noOfKms', e.target.value)}
                                />
                            </div>
                        </div>
                    ))}
                    <button type="button" className={styles.addStop} onClick={addStop}>
                        Add Stop
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddRouteForm
