import Information from "../../../assets/images/AboutImages/Information.png"
import "./style.css"
import React, { useEffect, useRef, useState } from "react";
const InformationSection = () => {


    const [startCount, setStartCount] = useState(false);
    const sectionRef = useRef(null);


    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }

            },
            {
                threshold: 0.3
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();

    }, []);



    return (
        <div style={{ backgroundColor: "#F9F9F7" }}>
            <div className="container ">
                <div className="row align-items-center py-3 g-5">
                    {/* Left div  */}
                    <div className="col-12 col-md-6">
                        <div className="Info-section">
                            <h1 className="info-title">A little information for our valuable guest</h1>
                            <p className="mt-3 info-para">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>

                            {/* card section  */}
                            <div className="row mt-4 g-3" ref={sectionRef}>
                                <div className="col-6 shadow-lg-dark">
                                    <div className="box">
                                        <h3>
                                            <Counter
                                                target={3}
                                                start={startCount}
                                            />
                                        </h3>
                                        <p>Locations</p>

                                    </div>


                                </div>
                                <div className="col-6">
                                    <div className="box">
                                        <h3> <Counter
                                            target={1995}
                                            start={startCount}
                                        /></h3>
                                        <p>Founded</p>

                                    </div>


                                </div>
                                <div className="col-6">
                                    <div className="box">
                                        <h3> <Counter
                                                target={65}
                                                start={startCount}
                                            />
                                            +</h3>
                                        <p>Staff Members</p>

                                    </div>


                                </div>
                                <div className="col-6">
                                    <div className="box">
                                        <h3><Counter
                                                target={100}
                                                start={startCount}
                                            />
                                            %</h3>
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


const Counter = ({ target, start }) => {

    const [count, setCount] = useState(0);

    useEffect(() => {

        if (!start) return;

        let startTime = null;
        let animationFrame;

        const duration = 2000;

        const animate = (timestamp) => {

            if (!startTime) {
                startTime = timestamp;
            }

            const progress = Math.min(
                (timestamp - startTime) / duration,
                1
            );

            // Smooth counting animation
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(easeOut * target));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }

        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);

    }, [start, target]);

    return count;

};

export default InformationSection;