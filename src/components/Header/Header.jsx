/* eslint-disable react/no-unknown-property */
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'

const Header = () => {
    const navLinks = (
        <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/service">Service</NavLink></li>
        <li><NavLink to="/serviceDetails">Service Details</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        {/* <li><NavLink to="/"></NavLink></li> */}
        </>
    )
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {navLinks}
                        </ul>
                    </div>
                    <a className=" "><img className="w-32 text-blue-900" src={logo} alt="" /></a>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;