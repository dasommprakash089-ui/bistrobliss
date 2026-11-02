import "./style.css";
import blog12 from "../../../assets/images/Blog&Articles/blog12.png"
const ParaSection=()=>{
    return(
        <>
    <div className="para-section">
        <div className="container">
            <div className="row">
                <div className="para-section-heading col-12 text-center">
                    <h1>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h1>
                </div>
                <div className="para-img">
                    <img src={blog12} alt="para-img" />

                </div>
            </div>
        </div>
    </div>

    </>
    )
}
export default ParaSection;