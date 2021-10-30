import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';

const Order = () => {
    const {_id}=useParams();
    const [order,setOrder]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${_id}`)
        .then(res=>res.json())
        .then(data=>setOrder(data));
    },[])
    return (
        <div>
        <h2>This is order:{_id}</h2>
        <h2>{order.Name}</h2>
        </div>
    );
};

export default Order;