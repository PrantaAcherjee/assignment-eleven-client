import React from 'react';
import "./MobileApp.css"
const MobileApp = () => {
    return (
        <div className="my-5 d-flex justify-content-center">        
           <div className='container row services-section'>
           <h4 className='my-5'>Adventure Ideas</h4>
            <div className='col-md-6'>
                <h5 className='text-start common-head'>Making Adventure tours, activities affordable.</h5>
                <hr className='w-25 my-5 '/>
                <p className='text-start common-font'>Find an adventure, create a hobby that is related to nature in its vert pristiene shape for your goodness. Tempor incididunt ut labore. Et dolore magna aliqua. Quitts ipsum suspendisse ultrices gravida.</p>
            </div>
             
            <div className='col-md-6'>
            <img className='img-fluid' src="https://adventor.wpengine.com/wp-content/uploads/2021/07/overlap-image.jpg" alt="idea images"/>
            </div>
           </div>
        </div>
        
    );
};

export default MobileApp;