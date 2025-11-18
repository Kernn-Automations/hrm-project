import React from 'react'
import CentralNavBar from '@/utils/CentralNavBar';
import styles from './AttendanceForm.module.css';
import PresentList from './PresentList';
import { useLocation, useNavigate } from 'react-router-dom';

function AttendanceHeader() {
    const navigate = useNavigate();
    const location = useLocation();
    
    return (
        <>
            <CentralNavBar>
                <button className={`${location.pathname === '/attendance' ? "active-central-navbar" : ""}`} onClick={() => navigate("/attendance")}>Home</button>
                <button className={`${location.pathname.includes('/requests') ? "active-central-navbar" : ""}`} onClick={() => navigate("/attendance/requests")}>Requests</button>
                <button className={`${location.pathname.includes('/approvals') ? "active-central-navbar" : ""}`} onClick={() => navigate("/attendance/approvals")}>Approvals</button>
                <button className={`${location.pathname.includes('/leave-settings') ? "active-central-navbar" : ""}`} onClick={() => navigate("/attendance/leave-settings")}>Leave Settings</button>
                <button className={`${location.pathname.includes('/weekoff-settings') ? "active-central-navbar" : ""}`} onClick={() => navigate("/attendance/weekoff-settings")}>Weekoff Settings</button>
                <button className={`${location.pathname.includes('/ph-settings') ? "active-central-navbar" : ""}`} onClick={() => navigate("/attendance/ph-settings")}>PH Settings</button>
            </CentralNavBar>
        </>
    )
}

export default AttendanceHeader
