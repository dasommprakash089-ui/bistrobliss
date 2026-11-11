import "./style.css"

import Uber from "../../../assets/images/MenuImage/Uber.png"
import Grubhub from "../../../assets/images/MenuImage/Grubhu.png"
import Postmates from "../../../assets/images/MenuImage/Postmates.png"
import Doordash from "../../../assets/images/MenuImage/Doordash.png"
import FoodPanda from "../../../assets/images/MenuImage/FoodPanda.png"
import  Delivero from "../../../assets/images/MenuImage/Delivero.png"
import Instacart from "../../../assets/images/MenuImage/Instacart.png"
import Justeat from "../../../assets/images/MenuImage/Justeat.png"
import Didifood from "../../../assets/images/MenuImage/Didifood.png"

const OrderComponenet = () => {
    return (
        <div style={{backgroundColor:"#F9F9F7"}}>

            <div className="container">
                <div className="row py-5">
                    {/* first div  */}
                    <div className="col-12 col-md-4">
                        <div className="content">
                            <h2>You can order<br/> through apps</h2>
                            <p>Lorem ipsum dolor sit amet consectetur <br/>adipiscing elit enim bibendum sed et aliquet <br/> aliquet risus tempor semper.</p>
                        </div>

                    </div>

                    {/* second div  */}
                    <div className="col-12 col-md-8">
                        <div className="image-section row align-items-center g-3 justify-content-center">
                            <div className="col-12 col-md-3 app-card">
                               <img  src={Uber} alt="Uber Eats"  />

                            </div>
                            <div className="col-12 col-md-3 app-card">
                                 <img  src={Grubhub} alt="GRUBHUB" /> 

                            </div>
                            <div className="col-12 col-md-3 app-card">
                                <img  src={Postmates} alt="Postmates"/> 

                            </div>
                              <div className="col-12 col-md-4  app-card">
                                <img  src={Doordash} alt="Doordash" /> 

                            </div>
                            <div className="col-12 col-md-4  app-card">
                                <img  src={FoodPanda} alt="FoodPanda" /> 

                            </div>
                            <div className="col-12 col-md-4  app-card">
                                <img  src={Delivero}  alt="Delivero" /> 

                            </div>
                            <div className="col-12 col-md-3 app-card">
                                <img  src={Instacart} alt="Instacart" /> 

                            </div>
                             <div className="col-12 col-md-3  app-card">
                                <img  src={Justeat} alt="Justeat" /> 

                            </div>
                            <div className="col-12 col-md-3  app-card">
                                <img  src={Didifood} alt="Didifood" /> 

                            </div>


                            

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default OrderComponenet;