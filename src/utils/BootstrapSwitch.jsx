import React from 'react'
import { Form } from 'react-bootstrap'

function BootstrapSwitch({ checked, setChecked }) {
    return (
        <>
            <Form.Check
                type="switch"
                id="custom-switch"
                // label={checked ? "Switch is ON" : "Switch is OFF"}
                // checked={checked}
                // onChange={() => setChecked(!checked)}
                style={{
                    color: checked ? 'green' : 'red',
                    fontWeight: 'bold',
                    fontSize: '18px',
                }}
            />
        </>
    )
}

export default BootstrapSwitch
