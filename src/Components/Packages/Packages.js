import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Packages = () => {
const[packages,setPackages]=useState([]);
useEffect(()=>{
fetch('https://cryptic-harbor-59269.herokuapp.com/services')
.then(res=>res.json())
.then(data=>setPackages(data));
  },[])
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
             
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }
   ]
   
    }
    
    return (
        <div className="services-section overflow-hidden">
         <h4 className='my-5'>Explore Activities</h4>
         <Slider {...settings} className="mb-5">
         {packages.map(pack=><div className='container'
           key={pack._id}>   
            <img className="img-fluid rounded" src={pack.img} alt="" />
            <h5 className="">{pack.Name}</h5>
            <p>Starts from ${pack.price}</p>
            {/* <p className=""><small>{pack.description}</small></p>    */}
            <Link to={`/order/${pack._id}`}>
            <button className="common-btn">Book Now <i class="fa-solid fa-square-arrow-up-right"></i></button>
            </Link>
          </div>)
  }
  
           
        </Slider>
 
        </div>
    );
};

export default Packages;