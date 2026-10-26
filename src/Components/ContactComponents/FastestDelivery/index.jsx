
import "./style.css";
import deliveryImage from "../../../assets/images/Food-Delivery/Mid-shot.png";
import deliveryImage2 from "../../../assets/images/Food-Delivery/Prawn-curry.png";
import deliveryImage3 from "../../../assets/images/Food-Delivery/various-salad.png";
import { IoIosTime } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";

const FastestDelivery = () => {
  return (
    <>
    <div className="fastestdelivery">
      <div className="container">
        <div className="row">
          <div className=" col-12 col-md-6 fastestdelivery-left" >
            <div className="fastestdelivery-img">
<img src={deliveryImage} alt="fastestdeliveryimage-1" />
            </div>
            <div className="fastestdelivery-img-2">
              <img src={deliveryImage2} alt="fastestdeliveryimage-2" />
              <img src={deliveryImage3} alt="fastestdeliveryimage-3" />
            </div>

          </div>

          <div className="col-12 col-md-6 fastestdelivery-right">
            <div className="right-para-1">
              <h2>Fastest Food <br/> Delivery in City </h2>
              <p>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
            </div>
            <div className="right">
              <div className="right-icon">
            <p className="icon-1"><IoIosTime /></p>
            <span className="icon-1-text">Delivery within 30 minutes</span>
          </div>
              <div className="right-icon">
            <p className="icon-1"><BiSolidOffer /></p>
            <span className="icon-1-text">Best Offer & Prices</span>
          </div>
              <div className="right-icon">
            <p className="icon-1"><FaCartShopping /></p>
            <span className="icon-1-text">Online Services Available</span>
          </div>
          </div>
          </div>
        
          
        </div>
      </div>

    </div>
   </>
  );
};

export default FastestDelivery;