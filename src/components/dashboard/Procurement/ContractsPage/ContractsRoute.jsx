import { Route, Routes } from 'react-router-dom';
import ContractsHeader from './ContractsHeader';
import AddContract from './AddContract';
import { lazy, Suspense } from 'react';
import SquareTableSkeleton from '@/SkeletonLoaders/SquareTableSkeleton';

const DeleteContract = lazy(() => import('./DeleteContract'))
const OngoingContracts = lazy(() => import('./OngoingContracts'))

const ContractsRoute = () => {
    return (
        <div className="main-container">
            <ContractsHeader />
            <Routes>
                <Route index element={<AddContract />} />
                <Route path='/delete' element={
                    <Suspense fallback={<SquareTableSkeleton />}>
                        <DeleteContract />
                    </Suspense>
                } />
                <Route path='/ongoing' element={
                    <Suspense fallback={<SquareTableSkeleton />}>
                        <OngoingContracts />
                    </Suspense>
                } />
            </Routes>
        </div>
    );
};

export default ContractsRoute;