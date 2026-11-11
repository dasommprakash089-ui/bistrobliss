import "./style.css"
import cateringImg from "../../../assets/images/HomeImages/Catering.png"
import birthdayImg from "../../../assets/images/HomeImages/Birthdays.png"
import weddingImg from "../../../assets/images/HomeImages/Wedding.png"
import eventsImg from "../../../assets/images/HomeImages/Events.png"

const services = [
    { img: cateringImg, title: "Caterings" },
    { img: birthdayImg, title: "Birthdays" },
    { img: weddingImg, title: "Weddings" },
    { img: eventsImg, title: "Events" },
]

const ThirdHero = () => {
    return (
        <section className="services-section">
            <div className="services-container">
                <h2 className="services-title">
                    We also offer unique <br />
                    services for your events
                </h2>

                <div className="services-grid">
                    {services.map((item) => (
                        <div className="service-card" key={item.title}>
                            <img src={item.img} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>
                                In the new era of technology we look
                                in the future with certainty for life.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ThirdHero;