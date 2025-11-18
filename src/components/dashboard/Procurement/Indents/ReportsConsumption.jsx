import React from 'react';
import { useState } from 'react';
import styles from './ReportsPage.module.css';
import ConsumptionTray from './ConsumptionTray';
export default function ReportsConsumption() {
    const [selectedRow, setSelectedRow] = useState(null);

      const sampleData = [
    {
      id: 1,
      date: '2025-07-10',
      bmccc: 'BMC-101',
      by: 'John',
      code: 'MAT-001',
      name: 'Cement',
      inHand: '100',
      consumptionQty: '20',
      consumptionType: 'Regular'
    },
    {
      id: 2,
      date: '2025-07-11',
      bmccc: 'CC-202',
      by: 'Alice',
      code: 'MAT-002',
      name: 'Bricks',
      inHand: '2000',
      consumptionQty: '500',
      consumptionType: 'Urgent'
    }
  ];
    return(
        <>
        <div className={styles.tableContainer}>
                  <table className="circular-table">
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Date</th>
                        <th>BMC / CC</th>
                        <th>By</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>In Hand</th>
                        <th>Consumption Qty</th>
                        <th>Consumption Type</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleData.map((item, idx) => (
                        <tr key={item.id} className="circular-table-row">
                          <td>{idx + 1}</td>
                          <td>{item.date}</td>
                          <td>{item.bmccc}</td>
                          <td>{item.by}</td>
                          <td>{item.code}</td>
                          <td>{item.name}</td>
                          <td>{item.inHand}</td>
                          <td>{item.consumptionQty}</td>
                          <td>{item.consumptionType}</td>
                          <td>
                            <button
                                className={styles.viewbtn}
                                onClick={() => setSelectedRow(item)}
                                >
                                View
                            </button>

                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <ConsumptionTray
                    data={selectedRow}
                    open={!!selectedRow}
                    onClose={() => setSelectedRow(null)}/>
                </div>
        </>
    )
}