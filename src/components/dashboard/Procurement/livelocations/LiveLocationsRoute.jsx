import { Route, Routes } from 'react-router-dom';
import LiveLocationsHeader from './LiveLocationsHeader';
import { lazy, Suspense } from 'react';
import DropdownSkeleton from '@/SkeletonLoaders/DropdownSkeleton';

const LiveLocationsPage = lazy(() => import('./LiveLocationsPage'))

const LiveLocationsRoute = () => {
    return (
        <div className="main-container">
            <LiveLocationsHeader/>
            <Routes>         
                <Route index element={
                    <Suspense fallback={<DropdownSkeleton/>}>
                        <LiveLocationsPage/>
                    </Suspense>
                }/>
            </Routes>
        </div>
    );
};

export default LiveLocationsRoute;