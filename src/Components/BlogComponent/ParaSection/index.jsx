import "./style.css";
import blog12 from "../../../assets/images/Blog&Articles/blog12.png"
import blog13 from "../../../assets/images/Blog&Articles/blog13.png"
import blog1 from "../../../assets/images/Blog&Articles/blog.png"
import blog2 from "../../../assets/images/Blog&Articles/blog2.png"
import blog3 from "../../../assets/images/Blog&Articles/blog3.png"
import blog4 from "../../../assets/images/Blog&Articles/blog4.png"

const ParaSection = () => {
    return (
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
                        <div className="para-area">
                            <p className="para-1">What do you need to prepare a home-made burger?</p>
                            <p className="para-2">Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>
                            <div className="para-3">
                                <p><span style={{ fontWeight: "bold", fontSize: "18px" }}>1. Quality Beef:</span>The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</p>
                                <p><span style={{ fontWeight: "bold", fontSize: "18px" }}>2.Seasoning:</span> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</p>
                                <p><span style={{ fontWeight: "bold", fontSize: "18px" }}>3.Don’t Overwork the Meat:</span> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</p>
                                <p><span style={{ fontWeight: "bold", fontSize: "18px" }}>4.Cooking:</span> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</p>
                                <p><span style={{ fontWeight: "bold", fontSize: "18px" }}>5.Resting:</span> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</p>
                            </div>
                        </div>
                        <div className="para-area">
                            <p className="para-1">What are the right ingredients to make it delicious?</p>
                            <p className="para-2">Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>
                            <div className="para-3">
                                <p><span style={{ fontWeight: "bold", fontSize: "18px" }}>1. Quality Beef:</span>The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</p>
                                <p><span style={{ fontWeight: "bold", fontSize: "18px" }}>2.Seasoning:</span> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</p>
                                <p><span style={{ fontWeight: "bold", fontSize: "18px" }}>3.Don’t Overwork the Meat:</span> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</p>
                                <p><span style={{ fontWeight: "bold", fontSize: "18px" }}>4.Cooking:</span> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</p>
                                <p><span style={{ fontWeight: "bold", fontSize: "18px" }}>5.Resting:</span> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</p>
                            </div>
                        </div>
                        <div className="after-para">
                            <img src={blog13} alt="afterpara" />
                            <p>What are the right ingredients to make it delicious?</p>
                            <span className="">Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus ve of all hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis magna sit amet purus gravida quis blandit turpis..</span>

                        </div>
                        <div className="last-para">
                            <div className="heading">
                                <h1>Read More Articles</h1>
                                <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                                <div className="card-area row g-4 justify-content-center">
                                    <div className="col-12 col-sm-6 col-md-3">
                                        <div className="blog-card">
                                            <img src={blog1} alt="gluten free sushi" className="blog-card-img" />
                                            <div className="blog-card-name">
                                                <span className="blog-card-date">January 3, 2023</span>
                                                <h3 className="blog-card-title">
                                                    How to prepare a delicious gluten free sushi
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-3">
                                        <div className="blog-card">
                                            <img src={blog2} alt="pastry king" className="blog-card-img" />
                                            <div className="blog-card-name">
                                                <span className="blog-card-date">January 3, 2023</span>
                                                <h3 className="blog-card-title">
                                                    Exclusive baking lessons from the pastry king
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-3">
                                        <div className="blog-card">
                                            <img src={blog3} alt="french fries" className="blog-card-img" />
                                            <div className="blog-card-name">
                                                <span className="blog-card-date">January 3, 2023</span>
                                                <h3 className="blog-card-title">
                                                    How to prepare the perfect fries in an air fryer
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-3">
                                        <div className="blog-card">
                                            <img src={blog4} alt="gluten free sushi" className="blog-card-img" />
                                            <div className="blog-card-name">
                                                <span className="blog-card-date">January 3, 2023</span>
                                                <h3 className="blog-card-title">
                                                    5 great cooking gadgets you can buy to save time
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ParaSection;