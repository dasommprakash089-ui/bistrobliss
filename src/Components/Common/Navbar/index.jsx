
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdMenu, MdOutlineMail } from "react-icons/md";

import "./style.css"
import Logo from "../../../assets/images/HomeImages/Logo.png";

import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <header className="header">

                {/* <!-- Top Bar --> */}
                <div className="top-bar">
                    <div className="top-left">
                        <span> <IoCallOutline /> (414) 857 - 0107</span>
                        <span><MdOutlineMail /> yummy@bistrobliss</span>
                    </div>

                    <div className="top-right">
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaGithub /></a>
                    </div>
                </div>

                {/* <!-- Main Navbar --> */}
                <nav className="navbar">

                    {/* <!-- Logo --> */}
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                        <span>Bistro Bliss</span>
                    </div>

                    {/* <!-- Mobile Menu Toggle --> */}
                    <div className="mobile-menu">
                        <MdMenu />


                    </div>

                    {/* <!-- Navigation Links --> */}
                    <ul className="nav-links">
                        <li> <NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li> <NavLink to="/menu">Menu</NavLink></li>
                        <li><NavLink to="/pages">Pages</NavLink></li>
                        <li> <NavLink to="/contact">Contact</NavLink></li>

                        <li className="mobile-book">
                            <a href="#">Book A Table</a>
                        </li>
                    </ul>

                    {/* <!-- Booking Button --> */}
                    <a href="#" className="book-btn">Book A Table</a>

                </nav>

            </header>

        </>
    )
}
export default Navbar;