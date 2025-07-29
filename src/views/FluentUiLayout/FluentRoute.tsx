import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import AboutUs from '../../components/AboutUs';
import FluentUiLayout from './FluentUiLayout';
import Features from '../../components/Features';
import News from '../../components/News';
import PageNotFound from '../../components/PageNotFound';
import Products from '../../components/Products';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import Home from '../../components/Home';
import Students from '../../components/Students';

const FluentRoute = () => {
    return (
        <>
            <FluentProvider theme={webLightTheme}>
                <Routes>
                    <Route path="/" element={<FluentUiLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<AboutUs />} />
                        <Route path="students" element={<Students />} />
                        <Route path='products' element={<Products />}>
                            {/* If you want to render the one of child components to parents route make use of index route like below */}
                            {/* localhost:3000/produts now loadded features routes by using index */}
                            <Route index path='features' element={<Features />} />
                            <Route path='news' element={<News />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </FluentProvider>
        </>
    );
};

export default FluentRoute;