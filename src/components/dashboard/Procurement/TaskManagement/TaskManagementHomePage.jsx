import React from 'react'

const TaskManagementHomePage = ({navigate}) => {
  return (
    <>
      <div className='row m-0 p-0'>
        <div className='col'>
            {/* <button className={`homebtn`} onClick={() => navigate("/tasks")}>+ New</button> */}
                <button className={`homebtn`} onClick={() => navigate("/tasks/new")}>+New</button>
                <button className={`homebtn`} onClick={() => navigate("/tasks/pending")}>Pending</button>
                <button className={`homebtn`} onClick={() => navigate("/tasks/completed")}>Completed</button>
                <button className={`homebtn`} onClick={() => navigate("/tasks/status")}>Status</button>
           
        </div>
      </div>
    </>
  )
}

export default TaskManagementHomePage
