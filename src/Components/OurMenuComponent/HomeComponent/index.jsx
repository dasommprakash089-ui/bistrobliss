import Egg from "../../../assets/images/MenuImage/Egg.png"
import Pizza from "../../../assets/images/MenuImage/piza.png"
import mocktail from "../../../assets/images/MenuImage/mocktail.png"
import cake from "../../../assets/images/MenuImage/cake.png"
import Juice from "../../../assets/images/MenuImage/Juice.png"
import Icecream from "../../../assets/images/MenuImage/Ice-cream.png"
import Burger from "../../../assets/images/MenuImage/Burger.png"
import Waffels from "../../../assets/images/MenuImage/Waffels.png"
import "./style.css"
const HomeComponent = () => {
    return (
        <div>

            <div className="container mt-5 py-5">
                <h1 className="Menu-heading">Our Menu</h1>
                <p className="menu-para">We consider all the drivers of change gives you the components <br /> you need to change to create a truly happens.</p>
                <div className="row align-items-center">
                    <div className="menu-filters d-flex justify-content-center  gap-2 mb-4">
                        <button className="filter-btn" >All</button>
                        <button className="filter-btn" >Breakfast</button>
                        <button className="filter-btn" >Main Dishes</button>
                        <button className="filter-btn" >Drinks</button>
                        <button className="filter-btn" >Desserts</button>
                    </div>
                </div>

                <div className="row g-3" id="menu-items">


                    <div className="col-6 col-md-3" >
                        <div className="food-card">
                            <img src={Egg} alt="Fried Eggs" />
                            <div className="food-info">
                                <h6>$ 9.99</h6>
                                <h5>Fried Eggs</h5>
                                <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-6 col-md-3" >
                        <div className="food-card">
                            <img src={Pizza} alt="Hawaiian Pizza"/>
                                <div className="food-info">
                                    <h6>$ 15.99</h6>
                                    <h5>Hawaiian Pizza</h5>
                                    <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                                </div>
                        </div>
                    </div>


                    <div className="col-6 col-md-3">
                        <div className="food-card">
                            <img src={mocktail} alt="Cocktail"/>
                                <div class="food-info">
                                    <h6>$ 7.25</h6>
                                    <h5>Martinez Cocktail</h5>
                                    <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                                </div>
                        </div>
                    </div>


                    <div class="col-6 col-md-3">
                        <div class="food-card">
                            <img src={cake} alt="Butterscotch Cake"/>
                                <div class="food-info">
                                    <h6>$ 20.99</h6>
                                    <h5>Butterscotch Cake</h5>
                                    <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                                </div>
                        </div>
                    </div>


                    <div class="col-6 col-md-3">
                        <div class="food-card">
                            <img src={Juice} alt="Mint Lemonade"/>
                                <div class="food-info">
                                    <h6>$ 5.89</h6>
                                    <h5>Mint Lemonade</h5>
                                    <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                                </div>
                        </div>
                    </div>


                    <div class="col-6 col-md-3">
                        <div class="food-card">
                            <img src={Icecream} alt="Chocolate Icecream"/>
                                <div class="food-info">
                                    <h6>$ 18.05</h6>
                                    <h5>Chocolate Icecream</h5>
                                    <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                                </div>
                        </div>
                    </div>


                    <div class="col-6 col-md-3">
                        <div class="food-card">
                            <img src={Burger} alt="Cheese Burger"/>
                                <div class="food-info">
                                    <h6>$ 12.55</h6>
                                    <h5>Cheese Burger</h5>
                                    <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                                </div>
                        </div>
                    </div>


                    <div className="col-6 col-md-3">
                        <div class="food-card">
                            <img src={Waffels} alt="Classic Waffles"/>
                                <div class="food-info">
                                    <h6>$ 12.99</h6>
                                    <h5>Classic Waffles</h5>
                                    <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                                </div>
                        </div>
                    </div>
                    <div />


                </div>
            </div>

        </div>
        )
        
}

export default HomeComponent