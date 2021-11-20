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
        <div className="mt-3 bg ">
            <h2 className="pack-h1">Top <span style={{color:'red'}}>Tour Packages</span></h2>
            <p >World's leading tour and travels Booking website,Over 30,000 packages worldwide.</p>
             <br />

<div class="row row-cols-1 row-cols-md-3 g-6 pack-div">
  {packages.map(pack=><div
  className="col single-pack" key={pack.id}>
    
    <img className="img-fluid" src={pack.img} alt="" />
    <h2 className="name-color">Country:{pack.Name}</h2>
    <h5>Price:${pack.price}</h5>
    <p className=""><small>{pack.description}</small></p>
    
    <Link to={`/order/${pack._id}`}>
    <button className="bg-success text-white rounded-pill p-1">Confirm Order</button>
    </Link>
    </div>)


  }
  
</div> 
        </div>
    );
};

export default Packages;