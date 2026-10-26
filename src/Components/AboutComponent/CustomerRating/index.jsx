
import rating1 from "../../../assets/images/AboutImages/rating1.png"
const CustomerRating = () => {
    return(
        <div>

            <div className="container">
                <h1>What Our Customers Say</h1>
                <div className="row mt-4">
                    <div className="col-12 col-md-4">
                        <div>
                            <h3 >“The best restaurant”</h3>
                            <p>Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
                            <hr/>
                            <div>
                                <img src={rating1} alt=""/>
                                <div>
                                    <p>Sophire Robson</p>
                                    <p>Los Angeles, CA</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-md-4">
                        <div>
                            <h3 >“Simply delicious”</h3>
                            <p>Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
                            <hr/>
                            <div>
                                <img src="" alt=""/>
                                <div>
                                    <p>Matt Cannon</p>
                                    <p>San Diego, CA</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-md-4">
                        <div>
                            <h3 >“One of a kind restaurant”</h3>
                            <p>The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</p>
                            <hr/>
                            <div>
                                <img src="" alt=""/>
                                <div>
                                    <p>Andy Smith</p>
                                    <p>San Francisco, CA</p>
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