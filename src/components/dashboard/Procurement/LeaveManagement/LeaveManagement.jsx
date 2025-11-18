import React, { useState } from 'react';
import LeaveNavBar from './LeaveNavBar';
import ApplyLeaveForm from './ApplyLeaveForm';
import PendingsTable from './PendingsTable';
import ApprovalsTable from './ApprovalsTable'; // Import ApprovalsTable
import LeaveManagementHeader from './LeaveManagementHeader';
import CentralNavBar from '@/utils/CentralNavBar';

export default function LeaveManagement() {
  const [activeTab, setActiveTab] = useState('apply');
  const [selectedRow, setSelectedRow] = useState(null);

  const handleViewPending = (row) => {
    setSelectedRow(row); // Open tray by setting selected row
  };

  const closeTray = () => {
    setSelectedRow(null); // Close tray
  };

  const handleApprove = () => {
    alert(`Approved leave for ${selectedRow.name}`);
    closeTray();
  };

  const handleDecline = () => {
    alert(`Declined leave for ${selectedRow.name}`);
    closeTray();
  };

  return (
    <>
      <LeaveNavBar activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'apply' && <ApplyLeaveForm />}

      {activeTab === 'pending' && (
        <>
          <PendingsTable onView={handleViewPending} />

          {/* Tray overlay and sliding tray */}
          {selectedRow && (
            <>
              <div className="tray-overlay" onClick={closeTray}></div>
              <div className={`tray open`}>
                <div className="tray-header">
                  <h3>Leave Details</h3>
                  <button className="tray-close-btn" onClick={closeTray}>×</button>
                </div>
                <div className="tray-content">
                  <p><strong>Date :</strong> {selectedRow.date}</p>
                  <p><strong>Employee Name :</strong> {selectedRow.name}</p>
                  <p><strong>Employee ID :</strong> {selectedRow.empId}</p>
                  <p><strong>Type :</strong> {selectedRow.type}</p>
                  <p><strong>From Date :</strong> {selectedRow.fromDate}</p>
                  <p><strong>To Date :</strong> {selectedRow.toDate}</p>
                  <p><strong>No of days :</strong> {selectedRow.noOfDays}</p>
                  <p><strong>Leave Type :</strong> {selectedRow.leaveType}</p>
                  <p><strong>Time Type :</strong> {selectedRow.timeType}</p>
                  <p><strong>Reason :</strong> {selectedRow.reason}</p>
                  <div className="tray-actions">
                    <button className="tray-approve-btn" onClick={handleApprove}>Approve</button>
                    <button className="tray-decline-btn" onClick={handleDecline}>Decline</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}

      {activeTab === 'approvals' && <ApprovalsTable />} {/* Render approvals tab */}

    </>
  );
}
