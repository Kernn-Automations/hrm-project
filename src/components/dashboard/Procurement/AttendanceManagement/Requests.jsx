import React, { useState } from 'react'
import styles from './AttendanceForm.module.css';
import PresentList from './PresentList';
import ApprovedForm from './ApprovedForm';
import RequestForm from './RequestForm';

function Requests() {

    const requestsList = [{
        sn: 1,
        date: "07-07-2025",
        shift: "G1",
        checkIn: "10:10",
        checkOut: "10:20",
        firstHalf: "PH",
        secondHalf: "PH",
        requestIn: "00:00",
        requestOut: "00:00",
        status: "Approved"
    }, {
        sn: 2,
        date: "08-07-2025",
        shift: "G1",
        checkIn: "10:10",
        checkOut: "10:20",
        firstHalf: "PH",
        secondHalf: "PH",
        requestIn: "00:00",
        requestOut: "00:00",
        status: "Hold"
    }, {
        sn: 3,
        date: "09-07-2025",
        shift: "G1",
        checkIn: "10:10",
        checkOut: "10:20",
        firstHalf: "PH",
        secondHalf: "PH",
        requestIn: "00:00",
        requestOut: "00:00",
        status: "Declined"
    }]


    return (
        <>
            <PresentList />

            <div className={styles.tableContainer}>
                <table className="circular-table">

                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Date</th>
                            <th>Shift</th>
                            <th>Check IN</th>
                            <th>Check OUT</th>
                            <th>1st Half</th>
                            <th>2nd Half</th>
                            <th>Request IN</th>
                            <th>Request OUT</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {requestsList.map((req) => (<tr className="circular-table-row">
                            <td >{req.sn}</td>
                            <td>{req.date}</td>
                            <td>{req.shift}</td>
                            <td>{req.checkIn}</td>
                            <td>{req.checkOut}</td>
                            <td>{req.firstHalf}</td>
                            <td>{req.secondHalf}</td>
                            <td>{req.requestIn}</td>
                            <td>{req.requestOut}</td>
                            <td>
                                <RequestForm btnName={req.status} btnClass={req.status === "Approved" ? styles.approveButton : req.status === "Hold" ? styles.holdButton : styles.declineButton} />
                            </td>

                        </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </>
    )
}

export default Requests;
