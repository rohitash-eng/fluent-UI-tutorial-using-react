import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../../components/AboutUs';
import TestLayout from './TestLayout';
import Features from '../../components/Features';
import News from '../../components/News';
import PageNotFound from '../../components/PageNotFound';
import Products from '../../components/Products';

const TestComponentsRoute = () => {
    // const styles = useStyles();
    return (
        <>
            <Routes>
                <Route path="/" element={<TestLayout />}>
                    <Route path="about" element={<AboutUs />} />
                    <Route path='products' element={<Products />}>
                        {/* If you want to render the one of child components to parents route make use of index route like below */}
                        {/* localhost:3000/produts now loadded features routes by using index */}
                        <Route index path='features' element={<Features />} />
                        <Route path='news' element={<News />} />
                    </Route>
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};

export default TestComponentsRoute;