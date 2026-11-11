import "./style.css"
import heroimg from "../../../assets/images/HomeImages/Hero.png"
import { LuCoffee, LuSoup, LuCupSoda, LuCakeSlice } from "react-icons/lu"

const menuItems = [
    { icon: <LuCoffee />, title: "Breakfast" },
    { icon: <LuSoup />, title: "Main Dishes" },
    { icon: <LuCupSoda />, title: "Drinks" },
    { icon: <LuCakeSlice />, title: "Desserts" },
]

const HomeComponent = () => {
    return (
        <div className="Homepage">
             <img src={heroimg} alt="heroimg" />
            {/* HERO */}
            <div className="container-fluid">
                <div className="row">
                    <div className="Home-img">
                       

                        <div className="img-para">
                            <h1>
                                Best food for <br />
                                your taste
                            </h1>
                            <p>
                                Discover delectable cuisine and unforgettable moments
                                <br />
                                in our welcoming, culinary haven.
                            </p>

                            <div className="hero-buttons">
                                <button className="btn-primary">Book A Table</button>
                                <button className="btn-outline">Explore Menu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BROWSE OUR MENU */}
            <section className="browse-menu">
                <h2>Browse Our Menu</h2>

                <div className="menu-cards">
                    {menuItems.map((item) => (
                        <div className="menu-card" key={item.title}>
                            <div className="menu-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>
                                In the new era of technology we look in the future
                                with certainty and pride for our life.
                            </p>
                            <a href="#" className="menu-link">Explore Menu</a>
                        </div>
                    ))}
                </div>
            </section>
           
            
        </div>
    )
}
export default HomeComponent;