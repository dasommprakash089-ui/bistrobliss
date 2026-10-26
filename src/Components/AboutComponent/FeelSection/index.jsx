
import video from "../../../assets/images/AboutImages/video.png"
import menu from "../../../assets/images/AboutImages/restaurant-menu1.png"
import midIcon from "../../../assets/images/AboutImages/Iconabout.png"
import timer from "../../../assets/images/AboutImages/timer-1.png"
import "./style.css"
const FeelSection = () => {
    return (
        <div>
            {/* video section  */}
            <div className="container mt-4 ">

                <img src={video} alt="video about our restaurant" className="img-fluid  vdo-image" />
            </div>
            {/* features section  */}
            <div className=" container">
                <div className="row g-4 my-2">
                    <div className="col-12 col-md-4 ">
                        <div className="features">
                            <div>
                                <img src={menu} alt="menu" className="img-fluid"/>
                            </div>
                            <div>
                                <h3>Multi Cuisine</h3>
                                <p>In the new era of technology we look in the future with certainty life.</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-12 col-md-4 ">
                        <div className="features">
                            <div>
                                <img src={midIcon} alt="menu"  className="img-fluid" />
                            </div>
                            <div>
                                <h3>Easy To Order</h3>
                                <p>In the new era of technology we look in the future with certainty life.</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-12 col-md-4 ">
                        <div className="features">
                            <div>
                                <img src={timer} alt="menu"  className="img-fluid"/>
                            </div>
                            <div>
                                <h3>Fast Delivery</h3>
                                <p>In the new era of technology we look in the future with certainty life.</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default FeelSection;