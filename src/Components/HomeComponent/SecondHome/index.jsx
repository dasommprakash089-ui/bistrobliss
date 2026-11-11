
import FoodPlateImage from "../../../assets/images/AboutImages/Foodimage.png"
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import "./style.css"

const HeroSection = () => {
    return (
        <div>
            <div className="container">
                <div className="row  align-items-center py-5" >

                    {/* left image  */}

                    <div className=" col-12 col-md-6 position-relative mb-4">
                        <img src={FoodPlateImage} alt="FoodPlate" className="img-fluid about-img" />

                        <div className="contact-about">
                            <h5>Come and visit us</h5>
                            <p><IoCallOutline />(414) 857 - 0107</p>
                            <p><MdOutlineMailOutline />happytummy@restaurant.com</p>
                            <p><GrLocation />837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>

                        </div>

                    </div>
                    <div className="col-12 col-md-6 ">
                        <div className="px-5">
                            <h1 className="about-title">We provide healthy<br/> food for your family.</h1>
                            <p className="mt-3">Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
                            <p className="small-text">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default HeroSection;