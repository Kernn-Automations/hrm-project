import { Route, Routes } from 'react-router-dom';
import ApplyLeaveForm from './ApplyLeaveForm';
import LeaveManagementHeader from './LeaveManagementHeader';
import { lazy, Suspense } from 'react';
import SquareTableSkeleton from '@/SkeletonLoaders/SquareTableSkeleton';

const PendingsTable = lazy(() => import('./PendingsTable'))
const ApprovalsTable = lazy(() => import('./ApprovalsTable'))

const LeaveManagementRoute = () => {
    return (
        <div className="main-container">
            <LeaveManagementHeader />
            <Routes>
                {/* <Route  index element={<LeaveManagement/>}/> */}
                <Route index element={<ApplyLeaveForm />} />
                <Route path='/pendings' element={
                    <Suspense fallback={<SquareTableSkeleton />}>
                        <PendingsTable />
                    </Suspense>
                } />
                <Route path='/approvals' element={
                    <Suspense fallback={<SquareTableSkeleton />}>
                        <ApprovalsTable />
                    </Suspense>
                } />
            </Routes>
        </div>
    );
};

export default LeaveManagementRoute;