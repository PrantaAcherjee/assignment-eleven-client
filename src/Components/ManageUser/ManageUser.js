import React from 'react';
import { useState, useEffect } from 'react';

const ManageUser = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('https://cryptic-harbor-59269.herokuapp.com/services/')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    const handleRemove=id=>{
        const url=`https://cryptic-harbor-59269.herokuapp.com/services/${id}`
        fetch(url,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            alert('Deleted One');
            const remaining=services.filter(service=>service._id!==id);
            setServices(remaining);
        })
    }
    return (
        <div>
           <h2 className="h-2">Manage your Service</h2>
           {
               services.map(service=><div key={service._id}>

                   <div className="d-flex justify-content-center align-items-center m-3 p-3 ">
                   <div className="m-3">
                   <h2 className="text-danger">{service.Name}</h2>
                   <img className="img-fluid" src={service.img} alt="" />
                   </div>
                   <div>
                   <button className="text-white bg-danger m-5 p-3 rounded-pill" onClick={()=>handleRemove(service._id)}>Remove</button>
                   </div>
                   </div>
               </div>)
           } 
        </div>
    );
};

export default ManageUser;