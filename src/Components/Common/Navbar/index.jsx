
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import "./style.css"
import Logo from "../../../assets/images/HomeImages/Logo.png";








const Navbar = () => {
    return (
        <>
            <div>
                {/* 1st section  */}
                <div className="top-nav">
                    <div className="top-first-inner">
                        <div className="top-nav-connect">
                            <IoCallOutline />
                            (414) 857 - 0107
                        </div>
                        <div className="top-nav-connect">
                            <MdOutlineMail />
                            yummy@bistrobliss

                        </div>

                    </div>

                    <div className="Nav-socials">
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaGithub /></a>
                    </div>

                </div>
                {/* 2nd section  */}
                <div className="nav-second">
                    {/* Nav logo  */}
                    <div className="logo-section">
                        <img src={Logo} alt="logo" />
                        <h1>Bistro Bliss</h1>

                    </div>
                    {/* Nav Menu  */}
                    <div className="pen">
                        <a href="#" className="active">Home</a>
                        <a href="#about">About</a>
                        <a href="#menu">Menu</a>
                        <a href="#pages">Pages</a>
                        <a href="#contact">Contact</a>

                    </div>
                    {/* last btn  */}
                    <div className="nav-btn"> <button>
                        Book a Table
                    </button></div>



                </div>


            </div>

        </>
    )
}
export default Navbar;