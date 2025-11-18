import { Route, Routes } from 'react-router-dom';
import AttendanceHeader from './AttendanceHeader';
import PHSettings from './PHSettings'
import AttendanceHomeTable from './AttendanceHomeTable';
import { lazy, Suspense } from 'react';
import SquareTableSkeleton from '@/SkeletonLoaders/SquareTableSkeleton';
import BoxSkeleton from '@/SkeletonLoaders/BoxSkeleton';

const Requests = lazy(() => import('./Requests'))
const Approvals = lazy(() => import('./Approvals'))
const WeekoffSettings = lazy(() => import('./WeekoffSettings'))
const LeaveSettings = lazy(() => import('./LeaveSettings'))

const AttendanceForm = () => {
    return (
        <div className="main-container">
            <AttendanceHeader />
            <Routes>
                <Route path='/*' element={<AttendanceHomeTable />} />
                <Route path='/requests' element={
                    <Suspense fallback={<SquareTableSkeleton />}>
                        <Requests />
                    </Suspense>
                } />
                <Route path='/approvals' element={
                    <Suspense fallback={<SquareTableSkeleton />}>
                        <Approvals />
                    </Suspense>
                } />
                {/* <Route path='/leave-settings' element={
                    <Suspense fallback={<BoxSkeleton/>}>
                        <LeaveSettings />
                    </Suspense>
                } /> */}
                <Route path='/leave-settings' element={<LeaveSettings/>}/>
                <Route path='/weekoff-settings' element={
                    <Suspense fallback={<SquareTableSkeleton />}>
                        <WeekoffSettings />
                    </Suspense>
                } />
                <Route path='/ph-settings' element={<PHSettings />} />
            </Routes>
        </div>
    );
};

export default AttendanceForm;
