import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Products() {
  return (
    <>
        <div className="main-container">
          <h1>Welcome to Products demo</h1>
          <input type='text' placeholder="Search for Products" />
        </div>
        <NavLink to="features">Fatures</NavLink>
        <NavLink to="news">News</NavLink>
      <div className='load-children'>
        <Outlet />
      </div>
    </>
  );
}

export default Products;
