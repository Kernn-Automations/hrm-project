import CentralNavBar from '@/utils/CentralNavBar'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function ShiftHeader() {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <CentralNavBar>
                <button className={`${location.pathname === '/shifts' ? "active-central-navbar" : ""}`} onClick={() => navigate("/shifts")}>Shift Shedule</button>
                <button className={`${location.pathname.includes('/manage') ? "active-central-navbar" : ""}`} onClick={() => navigate("/shifts/manage")}>Manage Shifts</button>

            </CentralNavBar>
        </>
    )
}

export default ShiftHeader
