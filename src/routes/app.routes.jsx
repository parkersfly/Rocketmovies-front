import { Routes, Route } from 'react-router-dom'

import { Details } from '../pages/Details'

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Details />}/>
        </Routes>
    );
}