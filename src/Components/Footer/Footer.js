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
                                <h3 className="logo">
                                 Travels Freak</h3>
                                <div className="icons-container d-flex text-center mt-4">
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

                                
                            </div>
                        </div>
                        <div className="col-md-3">
                        <h4 className="text-start mb-4">Useful Links</h4>
                         <ul className="list">
                            <li><i class="fa-solid fa-location-arrow"></i> Home</li>
                            <li> <i class="fa-solid fa-location-arrow"></i> About</li>
                            <li><i class="fa-solid fa-location-arrow"></i> Contact</li>
                            <li><i class="fa-solid fa-location-arrow"></i> Asked a question</li>
                            <li><i class="fa-solid fa-location-arrow"></i> Delivery terms</li>
                         </ul>
                        </div>
                        <div className="col-md-3">
                          <h4 className="text-start mb-4">Reach Us</h4>
                          <div className="d-flex justify-content-start">
                           <FontAwesomeIcon icon={faMapMarkedAlt}  className="icons"/>
                            <p className="content">932 Galvin St. Pompano Beach, FL 33060</p>
                          </div> 
                          <div className="d-flex justify-content-start">
                          <FontAwesomeIcon icon={faPhoneVolume} className="icons"/>
                            <p className="content">(334) 336 3346</p>
                          </div> 
                          <div className="d-flex justify-content-start">
                          <i className="fa-solid fa-envelope icons"></i>
                            <p className="content">Example@example.com</p>
                          </div> 
                        </div>
                    </div>
                    <hr/>
                    <p className="mt-5">&copy; 2024 Travels Freak. Created by Pranta Acherjee</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
 