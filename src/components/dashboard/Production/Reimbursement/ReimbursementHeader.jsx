import CentralNavBar from '@/utils/CentralNavBar'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function ReimbursementHeader() {

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <>
            <CentralNavBar>
                <button className={`${location.pathname === '/reimbursement' ? "active-central-navbar" : ""}`} onClick={() => navigate("/reimbursement")}>+New Reimbursement</button>
                <button className={`${location.pathname.includes('/approvals') ? "active-central-navbar" : ""}`} onClick={() => navigate("/reimbursement/approvals")}>Approvals</button>
                <button className={`${location.pathname.includes('/requests') ? "active-central-navbar" : ""}`} onClick={() => navigate("/reimbursement/requests")}>Requests</button>

            </CentralNavBar>
        </>
    )
}

export default ReimbursementHeader
