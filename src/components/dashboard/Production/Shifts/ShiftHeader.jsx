import CentralNavBar from '@/utils/CentralNavBar'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function ShiftHeader() {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <CentralNavBar>
               

            </CentralNavBar>
        </>
    )
}

export default ShiftHeader
