import React from 'react'
import CentralNavBar from '@/utils/CentralNavBar'
import { useLocation, useNavigate } from 'react-router-dom';

function RouteHeader() {

    const navigate = useNavigate();
    const location = useLocation();

    
    return (
        <>
            <CentralNavBar>
                <button className={`${location.pathname === '/routes' ? "active-central-navbar" : ""}`} onClick={() => navigate("/routes")}>Routes</button>
            </CentralNavBar>
        </>
    )
}

export default RouteHeader
