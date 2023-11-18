import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
// const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='/catalog' element={<CatalogPage />} />
                <Route path='/favorites' element={<FavoritesPage />} />
                <Route path='*' element={<HomePage />} />
            </Route>
        </Routes>
    );
};

export default App;
