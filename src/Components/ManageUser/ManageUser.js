import React from 'react';
import { useState, useEffect } from 'react';

const ManageUser = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services/')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    const handleRemove=id=>{
        const url=`http://localhost:5000/services/${id}`
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
           <h2>Manage your Service</h2>
           {
               services.map(service=><div key={service._id}>

                   <h2>{service.Name}</h2>
                   <button onClick={()=>handleRemove(service._id)}>Remove</button>
               </div>)
           } 
        </div>
    );
};

export default ManageUser;