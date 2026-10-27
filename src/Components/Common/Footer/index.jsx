import "./style.css";
import japanesefood from "./Assets/japanese-food.png";
import footerimgone from "./Assets/footerimg-1.jpg";
import footerimgtwo from "./Assets/footerimg-2.jpg";
import footerimgthree from "./Assets/footerimg-3.png"
import footerimgfour from "./Assets/footerimg-4.jpg"
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-container">
        <div className="row footer-top">
        
          <div className="col-md-4 footer-left">
            <div className="footer-logo">
              <img src={japanesefood} alt="" />
              <h2>Bistro Bliss</h2>
            </div>
            <p className="footer-about">
              In the new era of technology we look a in the future with
              certainty and pride to for our company and.
            </p>
            <div className="footer-socials">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaGithub /></a>
            </div>
          </div>

        
          <div className="col-md-2 footer-pages">
            <h6 className="footer-heading">Pages</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/delivery">Delivery</Link></li>
            </ul>
          </div>

        
          <div className=" col-md-2 footer-pages">
            <h6 className="footer-heading">Utility Pages</h6>
            <ul className="footer-links">
              <li><a href="#">Start Here</a></li>
              <li><a href="#">Styleguide</a></li>
              <li><a href="#">Password Protected</a></li>
              <li><a href="#">404 Not Found</a></li>
              <li><a href="#">Licenses</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">View More</a></li>
            </ul>
          </div>

          
          <div className=" col-md-4 footer-insta">
            <h6 className="footer-heading">Follow Us On Instagram</h6>
            <div className="row g-2">
              <div className="col-6"><img src={footerimgone } alt="" className="footer-photo" /></div>
              <div className="col-6"><img src={footerimgtwo} alt="" className="footer-photo" /></div>
              <div className="col-6"><img src={footerimgthree}alt="" className="footer-photo" /></div>
              <div className="col-6"><img src={footerimgfour} alt="" className="footer-photo" /></div>
              
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          Copyright @ 2023 Hashtag Developer. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;