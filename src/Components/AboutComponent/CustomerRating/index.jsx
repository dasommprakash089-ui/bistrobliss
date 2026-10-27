
import rating1 from "../../../assets/images/AboutImages/rating1.png"
import rating2 from "../../../assets/images/AboutImages/rating2.png"
import rating3 from "../../../assets/images/AboutImages/rating3.png"
import "./style.css"
const CustomerRating = () => {
    return(
        <div>

            <div className="container py-5">
                <h1 className="text-center mb-5 section-title">What Our Customers Say</h1>
                <div className="row mt-4">
                    <div className="col-12 col-md-4 mb-4">
                        <div className="rating-card">
                            <h3 className="rating-heading">“The best restaurant”</h3>
                            <p className="text-rating">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
                            <hr/>
                            <div className="customer-info">
                                <img src={rating1} alt="first person"/>
                                <div>
                                    <p>Sophire Robson</p>
                                    <span>Los Angeles, CA</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-md-4 mb-4">
                        <div className="rating-card">
                            <h3  className="rating-heading" >“Simply delicious”</h3>
                            <p className="text-rating">Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
                            <hr/>
                            <div className="customer-info">
                                <img src={rating2} alt="second person"/>
                                <div>
                                    <p>Matt Cannon</p>
                                    <span>San Diego, CA</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-md-4">
                        <div className="rating-card">
                            <h3 className="rating-heading" >“One of a kind restaurant”</h3>
                            <p className="text-rating">The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</p>
                            <hr/>
                            <div className="customer-info">
                                <img src={rating3} alt="third person"/>
                                <div>
                                    <p>Andy Smith</p>
                                    <span>San Francisco, CA</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default CustomerRating;