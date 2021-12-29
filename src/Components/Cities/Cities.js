import React from 'react';
import './Cities.css'
const Cities = () => {
    return (
       <div>
           <h1 className="h1">Beautifull Location</h1>
            <div className="cities row">
              <div className=" col-md-3">
              <img className="img-fluid" src="http://rn53themes.net/themes/demo/travelz/images/gallery/t3.jpg" alt=""  />
            </div> 
            <div className="col-md-3">
              <img className="img-fluid" src="http://rn53themes.net/themes/demo/travelz/images/gallery/t2.jpg" alt="" />
             </div>
             <div className="col-md-3">
              <img className="img-fluid" src="http://rn53themes.net/themes/demo/travelz/images/gallery/t9.jpg" alt="" />
             </div>
             <div className="col-md-3">
              <img className="img-fluid"src="http://rn53themes.net/themes/demo/travelz/images/gallery/t7.jpg" alt="" />
             </div>
        </div>
       </div>
    );
};

export default Cities;