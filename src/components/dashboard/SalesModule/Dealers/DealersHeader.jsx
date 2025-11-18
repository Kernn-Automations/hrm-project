import CentralNavBar from '@/utils/CentralNavBar'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function DealersHeader() {

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <>
            <CentralNavBar>
                <button className={`${location.pathname === '/dealers' ? "active-central-navbar" : ""}`} onClick={() => navigate("/dealers")}>+ Add Dealer</button>
                <button className={`${location.pathname.includes('/delete') ? "active-central-navbar" : ""}`} onClick={() => navigate("/dealers/delete")}>- Delete Dealer</button>
                <button className={`${location.pathname.includes('/on-going') ? "active-central-navbar" : ""}`} onClick={() => navigate("/dealers/on-going")}>Ongoing Dealer</button>
                <button className={`${location.pathname.includes('/manage') ? "active-central-navbar" : ""}`} onClick={() => navigate("/dealers/manage")}>Manage Dealer</button>
            </CentralNavBar>
        </>
    )
}

export default DealersHeader
