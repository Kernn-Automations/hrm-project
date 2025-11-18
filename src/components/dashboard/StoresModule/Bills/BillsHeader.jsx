import CentralNavBar from '@/utils/CentralNavBar'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function BillsHeader() {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <CentralNavBar>
                <button className={`${location.pathname === '/bills' ? "active-central-navbar" : ""}`} onClick={() => navigate("/bills")}>Pending</button>
                <button className={`${location.pathname.includes('/bills/payment-status') ? "active-central-navbar" : ""}`} onClick={() => navigate("/bills/payment-status")}>Payment Status</button>
            </CentralNavBar>
        </>
    )
}

export default BillsHeader
