


import React, { useState } from "react";

import video from "../../../assets/images/AboutImages/video.png";
import menu from "../../../assets/images/AboutImages/restaurant-menu1.png";
import midIcon from "../../../assets/images/AboutImages/Iconabout.png";
import timer from "../../../assets/images/AboutImages/timer-1.png";

import { FaPlay, FaTimes } from "react-icons/fa";

import "./style.css";

const FeelSection = () => {

    const [playVideo, setPlayVideo] = useState(false);

    return (
        <div>

            {/* Video Section */}

            <div className="container mt-4">

                <div className="video-content">

                    {!playVideo ? (

                        <>
                            <img
                                src={video}
                                alt="Video about our restaurant"
                                className="img-fluid vdo-image"
                            />

                            <button
                                className="play-button"
                                onClick={() => setPlayVideo(true)}
                                aria-label="Play restaurant video"
                            >
                                <FaPlay />
                            </button>
                        </>

                    ) : (

                        <div className="youtube-container">

                            <button
                                className="close-video"
                                onClick={() => setPlayVideo(false)}
                                aria-label="Close video"
                            >
                                <FaTimes />
                            </button>

                            <iframe
                                src="https://www.youtube.com/embed/rI8FOLA-9XM?autoplay=1&rel=0"
                                title="Bistro Bliss Restaurant Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                referrerPolicy="strict-origin-when-cross-origin"
                            ></iframe>

                        </div>

                    )}

                </div>

            </div>


            {/* Features Section */}

            <div className="container py-5 ">

                <div className="row g-4 my-2">

                    {/* Multi Cuisine */}

                    <div className="col-12 col-md-4">

                        <div className="features">

                            <div>
                                <img
                                    src={menu}
                                    alt="Multi Cuisine"
                                    className="img-fluid"
                                />
                            </div>

                            <div>
                                <h3>Multi Cuisine</h3>
                                <p>
                                    In the new era of technology we look
                                    in the future with certainty life.
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* Easy To Order */}

                    <div className="col-12 col-md-4">

                        <div className="features">

                            <div>
                                <img
                                    src={midIcon}
                                    alt="Easy To Order"
                                    className="img-fluid"
                                />
                            </div>

                            <div>
                                <h3>Easy To Order</h3>
                                <p>
                                    In the new era of technology we look
                                    in the future with certainty life.
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* Fast Delivery */}

                    <div className="col-12 col-md-4">

                        <div className="features">

                            <div>
                                <img
                                    src={timer}
                                    alt="Fast Delivery"
                                    className="img-fluid"
                                />
                            </div>

                            <div>
                                <h3>Fast Delivery</h3>
                                <p>
                                    In the new era of technology we look
                                    in the future with certainty life.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default FeelSection;
