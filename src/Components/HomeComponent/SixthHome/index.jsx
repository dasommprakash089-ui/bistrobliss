
import "./style.css";

import burger from "../../../assets/images/Blog&Articles/Burger.png";
import fries from "../../../assets/images/Blog&Articles/French-Fries.png";
import tenders from "../../../assets/images/Blog&Articles/Chicken-Tendens.png";
import cupcake from "../../../assets/images/Blog&Articles/Cup-cake.png";
import pizza from "../../../assets/images/Blog&Articles/Pizza.png";

const SixthHero = () => {
  return (
    <section className="home-blog">
      <div className="home-blog__container">
        {/* Heading row */}
        <div className="home-blog__top">
          <h2 className="home-blog__heading">Our Blog &amp; Articles</h2>
          <button className="home-blog__btn">Read All Articles</button>
        </div>

        {/* Cards */}
        <div className="home-blog__grid">
          {/* Big card */}
          <article className="blog-card blog-card--big">
            <img className="blog-card__img" src={burger} alt="Burger" />
            <div className="blog-card__body">
              <p className="blog-card__date">January 3, 2023</p>
              <h3 className="blog-card__title">
                The secret tips &amp; tricks to prepare a perfect burger &amp;
                pizza for our customers
              </h3>
              <p className="blog-card__desc">
                Lorem ipsum dolor sit amet consectetur of a adipiscing elitlmlm
                semper adipiscing massa gravida nisi cras enim quis nibholm
                varius amet gravida ut facilisis neque egestas.
              </p>
            </div>
          </article>

          {/* Small card 1 */}
          <article className="blog-card">
            <img className="blog-card__img" src={fries} alt="French fries" />
            <div className="blog-card__body">
              <p className="blog-card__date">January 3, 2023</p>
              <h3 className="blog-card__title">
                How to prepare the perfect french fries in an air fryer
              </h3>
            </div>
          </article>

          {/* Small card 2 */}
          <article className="blog-card">
            <img className="blog-card__img" src={tenders} alt="Chicken tenders" />
            <div className="blog-card__body">
              <p className="blog-card__date">January 3, 2023</p>
              <h3 className="blog-card__title">
                How to prepare delicious chicken tenders
              </h3>
            </div>
          </article>

          {/* Small card 3 */}
          <article className="blog-card">
            <img className="blog-card__img" src={cupcake} alt="Cheesecake" />
            <div className="blog-card__body">
              <p className="blog-card__date">January 3, 2023</p>
              <h3 className="blog-card__title">
                7 delicious cheesecake recipes you can prepare
              </h3>
            </div>
          </article>

          {/* Small card 4 */}
          <article className="blog-card">
            <img className="blog-card__img" src={pizza} alt="Pizza" />
            <div className="blog-card__body">
              <p className="blog-card__date">January 3, 2023</p>
              <h3 className="blog-card__title">
                5 great pizza restaurants you should visit this city
              </h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SixthHero;