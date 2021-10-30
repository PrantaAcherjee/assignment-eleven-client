import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
    faPhoneVolume,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div>
            {/* footer section started  */}

            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-container text-start">
                                <h1>Travels Freak</h1>
                                <div className="icons-container d-flex text-center ">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </div>
                                </div>
                                <p className="mt-4 ">
                                    <small>
                                        Eiusmod qui pig veniam nostrud. Chicken mollit flank ground round est short loin ad do bacon velit bresaola excepteur eu. Doner turducken aute, ut lorem alcatra pork belly capicola short ribs meatball. Excepteur quis nostrud, et dolor laborum pig bresaola corned beef officia.


                                    </small>
                                </p>

                                <p className="mt-5">
                                    "Travels Freak"<small>© All rights reserved.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-footer-container">
                                <h3>Get your Destiny</h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Cross the beyond yourself !"
                                />
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div>
                                        <h5>++2 33 343 567 650</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>
                                    <div>
                                        <p>

                                            95 Faubourg Saint Honore
                                            <br />
                                            Ile-de-France -75019
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
