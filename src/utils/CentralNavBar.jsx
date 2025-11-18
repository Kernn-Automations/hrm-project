import React, { Children } from 'react'

function CentralNavBar({children}) {
    return (
        <>
            <div className="central-navbar">
                {children}
            </div>
        </>
    )
}

export default CentralNavBar
