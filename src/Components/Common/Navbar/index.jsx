
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import "./style.css"
// import Logo from "../assets/images/HomeImages/Logo.png"







const Navbar = () => {
    return (
        <>
            <div>
                {/* 1st section  */}
                <div className="top-nav">
                    <div className="top-first-inner">
                        <div className="top-nav-connect">
                            <IoCallOutline />
                            <p>(414) 857 - 0107</p>
                        </div>
                        <div className="top-nav-connect">
                            <MdOutlineMail />
                            <p>yummy@bistrobliss</p>

                        </div>

                    </div>

                    <div className="top-nav-end">
                        <div style={{ height: "35px", width: "35px", borderRadius: "50%", backgroundColor: "black", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}> <p style={{ position: "absolute", top: "7px" }}><FaTwitter /></p> </div>
                        <div style={{ height: "35px", width: "35px", borderRadius: "50%", backgroundColor: "black", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}> <p style={{ position: "absolute", top: "7px" }}><FaGithub /></p> </div>
                        <div style={{ height: "35px", width: "35px", borderRadius: "50%", backgroundColor: "black", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}> <p style={{ position: "absolute", top: "7px" }}><FaInstagram /></p> </div>
                        <div style={{ height: "35px", width: "35px", borderRadius: "50%", backgroundColor: "black", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}> <p style={{ position: "absolute", top: "7px" }}><FaFacebookF /></p> </div>

                    </div>

                </div>
                {/* 2nd section  */}
                <div className="nav-second">
                    {/* Nav logo  */}
                    <div className="logo-section">
                        {/* <img src={Logo} alt="logo" ></img> */}
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