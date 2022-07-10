import React from 'react';
import "./About.css"
import Banner from './../Banner/Banner';


const About = () => {
    return (
       <div>
          <div>
          <Banner></Banner>
           </div>
        <div className='container'>
           <div className="overflow-hidden services-section">
            <h4 className='my-5'>Photo gallary</h4>
            <div className="row  text-success ">               
              <div className="col-md-4 ">              
              <img className="img-fluid imagesAbout" src="https://demo.smartaddons.com/templates/joomla3/sj-urline/images/demo/galleryabout/s7.jpg" alt="" />             
              <img className="img-fluid imagesAbout" src="https://demo.smartaddons.com/templates/joomla3/sj-urline/images/demo/galleryabout/s6.jpg" alt="" />             
              <img className="img-fluid imagesAbout" src="https://demo.smartaddons.com/templates/joomla3/sj-urline/images/demo/galleryabout/s9.jpg" alt="" />             
            </div> 
            <div className="col-md-4">             
              <img className="img-fluid imagesAbout" src="https://demo.smartaddons.com/templates/joomla3/sj-urline/images/demo/galleryabout/s2.jpg" alt=""/>            
              <img className="img-fluid imagesAbout" src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" alt=""/>            
              <img className="img-fluid imagesAbout" src="https://demo.smartaddons.com/templates/joomla3/sj-urline/images/demo/galleryabout/s3.jpg" alt=""/>            
             </div>
             <div className="col-md-4">             
              <img className="img-fluid imagesAbout" src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80" alt="" />              
              <img className="img-fluid imagesAbout" src="https://image.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg" alt="" />              
              <img className="img-fluid imagesAbout" src="https://images.unsplash.com/photo-1549693578-d683be217e58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80" alt="" />              
             </div>
              
        </div> 
                
            </div>
            
           </div>
           
       </div>
    );
};

export default About;