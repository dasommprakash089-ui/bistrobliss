import "./style.css"

const ContactComponents=()=>{
    return(
        <>
       <div className="contact-page">
        <div className="container">
            <div className="row">
                <div className="contact-para">
                    <h2>Contact Us</h2>
                    <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                </div>
                <form className="contact-box">
                    <div className="name-email">
                        <div className="name">
                            <label For="" id="name">Name</label>
                            <input type="text" placeholder="Enter Your Name" id="input-name" />
                        </div>
                        <div className="email">
                            <label For="" >Email</label>
                            <input type="text" placeholder="Enter Your Email" id="input-email" />
                        </div>

                    </div>
                    <div className="subject">
                        <label For="">Subject</label>
                        <input type="text" placeholder="Enter The Subject" id="input-subject" />
                    </div>
                    <div className="message">
                        <label htmlFor="">Message</label>
                        <input type="text" placeholder="Write Your Message" id="input-message" />
                    </div>
                    <div className="button">
                        <button className="btn" >Send</button>
                    </div>

                </form>
                <div className="contact-bottom">
                    <div className="contact-bottom-1">
                        <p>Call-us:</p>
                        <h3 style={{color:"#AD343E"}}>+1-234-567-8900</h3>
                    </div>
                     <div className="contact-bottom-2">
                        <p>Hours:</p>
                        <h3>Mon-Fri: 11am - 8pm Sat, Sun: 9am - 10pm</h3>
                    </div>
                     <div className="contact-bottom-3">
                        <p>Our Location:</p>
                        <h3 style={{color:"#AD343E"}}>123 Bridge Street             Nowhere Land, LA 12345 United States</h3>
                    </div>

                </div>
            </div>
        </div>
       </div>
        </>
    )
}
export default ContactComponents;