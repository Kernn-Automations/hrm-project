import CentralNavBar from '@/utils/CentralNavBar'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function StoresHeader() {

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <>
            <CentralNavBar>
                <button className={`${location.pathname === '/stores' ? "active-central-navbar" : ""}`} onClick={() => navigate("/stores")}>Home</button>
                <button className={`${location.pathname.includes('/stores/add') ? "active-central-navbar" : ""}`} onClick={() => navigate("/stores/add")}>+ Add Store</button>
                <button className={`${location.pathname.includes('/stores/delete') ? "active-central-navbar" : ""}`} onClick={() => navigate("/stores/delete")}>- Delete Store</button>
            </CentralNavBar>
        </>
    )
}

export default StoresHeader
