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
        <div className="services-section container mb-5">
         <h4>Explore Activities</h4>
         <Slider {...settings} className="mx-5">
         {packages.map(pack=><div
           key={pack._id}>   
            <img className="img-fluid" src={pack.img} alt="" />
            <h2 className="name-color">{pack.Name}</h2>
            <h5>Price: ${pack.price}</h5>
            <p className=""><small>{pack.description}</small></p>   
            <Link to={`/order/${pack._id}`}>
            <button className="bg-success text-white rounded-pill p-1">Confirm Tour</button>
            </Link>
          </div>)
  }
  
           
        </Slider>
 
        </div>
    );
};

export default Packages;