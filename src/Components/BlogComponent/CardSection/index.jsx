import "./style.css";
import blog1 from "../../../assets/images/Blog&Articles/blog.png";
import blog2 from "../../../assets/images/Blog&Articles/blog2.png";
import blog3 from "../../../assets/images/Blog&Articles/French-Fries.png";
import blog4 from "../../../assets/images/Blog&Articles/Chicken-Tendens.png";
import blog5 from "../../../assets/images/Blog&Articles/blog5.png";
import blog6 from "../../../assets/images/Blog&Articles/Burger.png";
import blog7 from "../../../assets/images/Blog&Articles/Cup-cake.png";
import blog8 from "../../../assets/images/Blog&Articles/Pizza.png";
import blog9 from "../../../assets/images/Blog&Articles/blog9.png";
import blog10 from "../../../assets/images/Blog&Articles/blog10.png";
import blog11 from "../../../assets/images/Blog&Articles/blog11.png";
import blog12 from "../../../assets/images/Blog&Articles/blog12.png";

const CardSection = () => {
  return (
    <section className="blog-page">
      <div className="blog-page-para">
        <h1>Our Blog &amp; Articles</h1>
        <p>
          We consider all the drivers of change gives you the components you
          need <br /> to change to create a truly happens.
        </p>
      </div>

      <div className="card-area">
        <div className="blog-card">
          <img className="blog-card-img" src={blog1} alt="" />
          <div className="blog-card-name">
            <p className="blog-card-date">January 3, 2023</p>
            <h3 className="blog-card-title">How to prepare a delicious gluten free sushi</h3>
          </div>
        </div>

        <div className="blog-card">
          <img className="blog-card-img" src={blog2} alt="" />
          <div className="blog-card-name">
            <p className="blog-card-date">January 3, 2023</p>
            <h3 className="blog-card-title">Exclusive baking lessons from the pastry king</h3>
          </div>
        </div>

        <div className="blog-card">
          <img className="blog-card-img" src={blog3} alt="" />
          <div className="blog-card-name">
            <p className="blog-card-date">January 3, 2023</p>
            <h3 className="blog-card-title">How to prepare the perfect fries in an air fryer</h3>
          </div>
        </div>

        <div className="blog-card">
          <img className="blog-card-img" src={blog4} alt="" />
          <div className="blog-card-name">
            <p className="blog-card-date">January 3, 2023</p>
            <h3 className="blog-card-title">How to prepare delicious chicken tenders</h3>
          </div>
        </div>

        <div className="blog-card">
          <img className="blog-card-img" src={blog5} alt="" />
          <div className="blog-card-name">
            <p className="blog-card-date">January 3, 2023</p>
            <h3 className="blog-card-title">5 great cooking gadgets you can buy to save time</h3>
          </div>
        </div>

        <div className="blog-card">
          <img className="blog-card-img" src={blog6} alt="" />
          <div className="blog-card-name">
            <p className="blog-card-date">January 3, 2023</p>
            <h3 className="blog-card-title">The secret tips &amp; tricks to prepare a perfect burger</h3>
          </div>
        </div>

        <div className="blog-card">
          <img className="blog-card-img" src={blog7} alt="" />
          <div className="blog-card-name">
            <p className="blog-card-date">January 3, 2023</p>
            <h3 className="blog-card-title">7 delicious cheesecake recipes you can prepare</h3>
          </div>
        </div>

        <div className="blog-card">
          <img className="blog-card-img" src={blog8} alt="" />
          <div className="blog-card-name">
            <p className="blog-card-date">January 3, 2023</p>
            <h3 className="blog-card-title">5 great pizza restaurants you should visit this city</h3>
          </div>
        </div>

        <div className="blog-card">
          <img className="blog-card-img" src={blog9} alt="" />
          <div className="blog-card-name">
            <p className="blog-card-date">January 3, 2023</p>
            <h3 className="blog-card-title">5 great cooking gadgets you can buy to save time</h3>
          </div>
        </div>

        <div className="blog-card">
          <img className="blog-card-img" src={blog10} alt="" />
          <div className="blog-card-name">
            <p className="blog-card-date">January 3, 2023</p>
            <h3 className="blog-card-title">How to prepare a delicious gluten free sushi</h3>
          </div>
        </div>

        <div className="blog-card">
          <img className="blog-card-img" src={blog11} alt="" />
          <div className="blog-card-name">
            <p className="blog-card-date">January 3, 2023</p>
            <h3 className="blog-card-title">Top 20 simple and quick desserts for kids</h3>
          </div>
        </div>

        <div className="blog-card">
          <img className="blog-card-img" src={blog12} alt="" />
          <div className="blog-card-name">
            <p className="blog-card-date">January 3, 2023</p>
            <h3 className="blog-card-title">Top 20 simple and quick desserts for kids</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;