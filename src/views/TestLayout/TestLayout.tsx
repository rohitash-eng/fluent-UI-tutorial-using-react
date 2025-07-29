import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const TestLayout = () => {
    return (
        <>
            <nav>
                <NavLink to=''>Home</NavLink>
                <NavLink to='/about'>About us</NavLink>
                <NavLink to='/products'>Products</NavLink>
            </nav>
            <main className="content">
                <Outlet />
            </main>
        </>
    );
};

export default TestLayout;