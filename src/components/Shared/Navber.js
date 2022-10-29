import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {

    const navigations = <>

        <li><Link to='/service'>Service</Link></li>
        <li> <Link to='/product'>Product</Link></li>
        <li> <Link to='/Book'>Book</Link></li>
        <li> <Link to='/addBook'>Add-Book</Link></li>
        <li> <Link to='/blogs'>Blogs</Link></li>
        <li> <Link to='/contact'>Contact</Link></li>

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navigations}

                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>TODO-APP</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    {navigations}


                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navber;