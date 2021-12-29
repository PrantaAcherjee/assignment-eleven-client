import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Packages.css'
const Packages = () => {
  const[packages,setPackages]=useState([]);
  useEffect(()=>{
fetch('https://cryptic-harbor-59269.herokuapp.com/services')
.then(res=>res.json())
.then(data=>setPackages(data));


  },[])
    return (
        <div className="mt-3">
            <h2>TOP <span style={{color:'red'}}>TOUR PACKAGES</span></h2>
            <h6 >World's leading tour and travels Booking website,Over 30,000 packages worldwide.</h6>
             <br />

          <div class="row row-cols-1 row-cols-md-3 g-6 ">
            {packages.map(pack=><div
            className="col single-pack p-2" key={pack._id}>
    
            <img className="img-fluid image" src={pack.img} alt="" />
            <h2 className="name-color">{pack.Name}</h2>
            <h5>Price: ${pack.price}</h5>
            <p className=""><small>{pack.description}</small></p>
    
            <Link to={`/order/${pack._id}`}>
            <button className="bg-success text-white rounded-pill p-1">Confirm Tour</button>
            </Link>
          </div>)


  }
  
          </div> 
        </div>
    );
};

export default Packages;