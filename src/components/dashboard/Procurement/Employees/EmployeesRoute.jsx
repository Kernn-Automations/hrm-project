import { Route, Routes, useNavigate } from 'react-router-dom';
import CentralNavBar from '@/utils/CentralNavBar';
import EmployeesHeader from './EmployeesHeader';
import CreateEmployee from './CreateEmployee';
import AssignRole from './AssignRole';
import ManageEmployees from './ManageEmployees';
import { lazy, Suspense, use } from 'react';
import SquareTableSkeleton from '@/SkeletonLoaders/SquareTableSkeleton';
import EmployeesHome from './EmployeesHome';

const Assign = lazy(() => import('./AssignRole'))
const Manage = lazy(() => import('./ManageEmployees'))

const EmployeesRoute = () => {

    const navigate = useNavigate();

    return (
        
            <Routes>
                <Route index element={<EmployeesHome />} />
                <Route path='/create-employee' element={<CreateEmployee navigate={navigate}/>} />
                <Route path='/assign-role' element={
                    <Suspense fallback={<SquareTableSkeleton />}>
                        <Assign navigate={navigate}/>
                    </Suspense>
                } />
                <Route path='/manage-employees/*' element={
                    <Suspense fallback={<SquareTableSkeleton />}>
                        <Manage navigate={navigate}/>
                    </Suspense>
                } />
            </Routes>
    );
};

export default EmployeesRoute;