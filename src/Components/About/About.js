import React from 'react';
import "./About.css"
import Banner from './../Banner/Banner';


const About = () => {
    return (
       <div>
         
          <div>
          <Banner></Banner>
           </div>
           <div>
           <div className="">
               <h3 className="h-2 py-2">Why Travels Freak?</h3>
               <div className="row text-success">               
              <div className="col-md-4 ">
              <h5>Manage Official Documents</h5>
              <img className="img-fluid imagesAbout" src="https://image.freepik.com/free-photo/journey-travel-exploration-vacation-concept_53876-121064.jpg" alt="" />             
            </div> 
            <div className="col-md-4">
            <h5>Ensure Comfortable Journey</h5>
              <img className="img-fluid imagesAbout" src="https://image.freepik.com/free-photo/young-woman-with-long-hair-sitting-plane-by-window-using-smartphone_93675-134801.jpg" alt=""/>            
             </div>
             <div className="col-md-4">
             <h5>Hotel Advanced Booking</h5>
              <img className="img-fluid imagesAbout" src="https://image.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg" alt="" />
              
             </div>
              
        </div> 
                
            </div>
            
           </div>
           
       </div>
    );
};

export default About;