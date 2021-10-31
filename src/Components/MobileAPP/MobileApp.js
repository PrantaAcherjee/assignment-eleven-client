import React from 'react';
import "./MobileApp.css"
const MobileApp = () => {
    return (
        <div className="">
            <h2 className="h-2">Download Our Mobile App</h2>
            <br />
            <div className="row">
                <div className="col-md-3 background">
                    <h4 className="mobile-head">Have you tried our mobile app?</h4>
                    <br /><br />
                    <p>World's leading tour and travels Booking website,Over 30,000 packages worldwide. Book travel packages and enjoy your holidays with distinctive experience</p>
                    <br /><br /><br />
                    <ul className="text-white fw-10">
                        <li>
                        Easy Hotel Booking
                         </li>
                         <br />
                        <li>
                        Tour and Travel Packages
                        </li>
                        <br />
                        <li>
                        Package Reviews and Ratings
                        </li>
                        <br />
                        <li>
                        Manage your Bookings,
                        </li>
                        <br />
                        <li>
                        Enquiry and Reviews 
                        </li>
                    </ul>

                </div>
                <div className="col-md-9">
                    <img src="http://rn53themes.net/themes/demo/travelz/images/mobile.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MobileApp;