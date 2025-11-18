import { Route, Routes } from 'react-router-dom';
import CentralNavBar from '@/utils/CentralNavBar';
import EmployeesHeader from './EmployeesHeader';
import CreateEmployee from './CreateEmployee';
import AssignRole from './AssignRole';
import ManageEmployees from './ManageEmployees';
import { lazy, Suspense } from 'react';
import SquareTableSkeleton from '@/SkeletonLoaders/SquareTableSkeleton';

const Assign = lazy(() => import('./AssignRole'))
const Manage = lazy(() => import('./ManageEmployees'))

const EmployeesRoute = () => {
    return (
        <div className="main-container">
            <EmployeesHeader />
            <Routes>
                <Route index element={<CreateEmployee />} />
                <Route path='/assign-role' element={
                    <Suspense fallback={<SquareTableSkeleton />}>
                        <Assign />
                    </Suspense>
                } />
                <Route path='/manage-employees/*' element={
                    <Suspense fallback={<SquareTableSkeleton />}>
                        <Manage />
                    </Suspense>
                } />
            </Routes>
        </div>
    );
};

export default EmployeesRoute;