import Information from "../../../assets/images/AboutImages/Information.png"
import "./style.css"
const InformationSection = () => {
    return(
        <div>
            <div className="container ">
                <div className="row align-items-center py-5 g-5">
                    {/* Left div  */}
                    <div className="col-12 col-md-6">
                        <div className="Info-section">
                            <h1 className="info-title">A little information for our valuable guest</h1>
                            <p className="mt-3 info-para">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                            
                            {/* card section  */}
                            <div className="row mt-4 g-3">
                                <div className="col-6">
                                    <div className="box">
                                        <h3>3</h3>
                                        <p>Locations</p>
                                        
                                    </div>


                                </div>
                                <div className="col-6">
                                    <div className="box">
                                        <h3>1995</h3>
                                        <p>Founded</p>
                                        
                                    </div>


                                </div>
                                <div className="col-6">
                                    <div className="box">
                                        <h3>65+</h3>
                                        <p>Staff Members</p>
                                        
                                    </div>


                                </div>
                                <div className="col-6">
                                    <div className="box">
                                        <h3>100%</h3>
                                        <p>Satisfied Customers</p>
                                        
                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>
                    {/* Right img div  */}
                    <div className="col-12 col-md-6 ">
                        <img src={Information} alt="chef preparing" className="img-fluid rounded-3 info-img" />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default InformationSection;