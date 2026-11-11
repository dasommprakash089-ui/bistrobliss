
import "./style.css";

import image1 from "../../../assets/images/HomeImages/image1.png";
import image2 from "../../../assets/images/HomeImages/image2.png";
import image3 from "../../../assets/images/HomeImages/image3.png";

const FifthHero = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials__heading">What Our Customers Say</h2>

      <div className="testimonials__grid">
        <article className="testimonial-card">
          <h3 className="testimonial-card__title">“The best restaurant”</h3>
          <p className="testimonial-card__text">
            Last night, we dined at place and were simply blown away. From the
            moment we stepped in, we were enveloped in an inviting atmosphere
            and greeted with warm smiles.
          </p>
          <div className="testimonial-card__author">
            <img
              className="testimonial-card__avatar"
              src={image1}
              alt="Sophire Robson"
            />
            <div>
              <p className="testimonial-card__name">Sophire Robson</p>
              <p className="testimonial-card__location">Los Angeles, CA</p>
            </div>
          </div>
        </article>

        <article className="testimonial-card">
          <h3 className="testimonial-card__title">“Simply delicious”</h3>
          <p className="testimonial-card__text">
            Place exceeded my expectations on all fronts. The ambiance was cozy
            and relaxed, making it a perfect venue for our anniversary dinner.
            Each dish was prepared and beautifully presented.
          </p>
          <div className="testimonial-card__author">
            <img
              className="testimonial-card__avatar"
              src={image2}
              alt="Matt Cannon"
            />
            <div>
              <p className="testimonial-card__name">Matt Cannon</p>
              <p className="testimonial-card__location">San Diego, CA</p>
            </div>
          </div>
        </article>

        <article className="testimonial-card">
          <h3 className="testimonial-card__title">“One of a kind restaurant”</h3>
          <p className="testimonial-card__text">
            The culinary experience at place is first to none. The atmosphere is
            vibrant, the food - nothing short of extraordinary. The food was the
            highlight of our evening. Highly recommended.
          </p>
          <div className="testimonial-card__author">
            <img
              className="testimonial-card__avatar"
              src={image3}
              alt="Andy Smith"
            />
            <div>
              <p className="testimonial-card__name">Andy Smith</p>
              <p className="testimonial-card__location">San Francisco, CA</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FifthHero;