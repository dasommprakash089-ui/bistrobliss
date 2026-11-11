import "./style.css"
import chefImg from "../../../assets/images/Food-Delivery/Mid-shot.png"
import topImg from "../../../assets/images/Food-Delivery/Prawn-curry.png"
import bottomImg from "../../../assets/images/Food-Delivery/various-salad.png"
import { LuClock, LuReceipt, LuShoppingCart } from "react-icons/lu"

const features = [
    { icon: <LuClock />, text: "Delivery within 30 minutes" },
    { icon: <LuReceipt />, text: "Best Offer & Prices" },
    { icon: <LuShoppingCart />, text: "Online Services Available" },
]

const FourthHero = () => {
    return (
        <section className="delivery-section">
            <div className="delivery-container">

                {/* images */}
                <div className="delivery-images">
                    <img src={chefImg} alt="chef" className="delivery-main-img" />

                    <div className="delivery-side-imgs">
                        <img src={topImg} alt="food 1" />
                        <img src={bottomImg} alt="food 2" />
                    </div>
                </div>

                {/* text */}
                <div className="delivery-text">
                    <h2>
                        Fastest Food <br />
                        Delivery in City
                    </h2>
                    <p>
                        Our visual designer lets you quickly and of drag a down
                        your way to customapps for both keep desktop.
                    </p>

                    <ul className="delivery-list">
                        {features.map((item) => (
                            <li key={item.text}>
                                <span className="delivery-icon">{item.icon}</span>
                                {item.text}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default FourthHero;