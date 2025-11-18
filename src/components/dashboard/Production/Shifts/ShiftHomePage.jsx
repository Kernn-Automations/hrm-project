import React from 'react'

function ShiftHomePage() {
  return (
    <div className="d-flex justify-content-center p-3">
      <table className='square-table'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Employee Name</th>
            <th>MON</th>
            <th>TUE</th>
            <th>WED</th>
            <th>THU</th>
            <th>FRI</th>
            <th>SAT</th>
            <th>SUN</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Karthik</td>
            <td>Working</td>
            <td>Working</td>
            <td>Working</td>
            <td>Working</td>
            <td>Working</td>
            <td>Week Off</td>
            <td>Week Off</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ShiftHomePage
