import React from 'react'
import { useNavigate } from 'react-router-dom'

const EmployeesHome = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='row m-0 p-0'>
                <div className='col'>
                    <button
                        className={`homebtn`}
                        onClick={() => navigate("/employees/create-employee")}
                    >
                        Create Employee
                    </button>
                    <button
                        className={`homebtn`}
                        onClick={() => navigate("/employees/assign-role")}
                    >
                        Assign Role
                    </button>
                    <button
                        className={`homebtn`}
                        onClick={() => navigate("/employees/manage-employees")}
                    >
                        Manage Employees
                    </button>

                </div>
            </div>
        </>
    )
}

export default EmployeesHome
