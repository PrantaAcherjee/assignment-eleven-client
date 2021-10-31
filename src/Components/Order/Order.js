import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';

const Order = () => {
    const {_id}=useParams();
    const [order,setOrder]=useState({})
    useEffect(()=>{
        fetch(`https://cryptic-harbor-59269.herokuapp.com/services/${_id}`)
        .then(res=>res.json())
        .then(data=>setOrder(data));
    },[])
    return (
        <div>
        <h2 className="h-2">Get Your Service</h2>
        <h2>Country Name: {order.Name}</h2>
        <img src={order.img} alt="" />
        <br />
        <br />
        <Link to="/confirm">
        <button className="text-white bg-danger">Confirm Order</button>
        </Link>
        <p>Price: ${order.price}</p>
        <p><small>
            We will ensure you best service.Business classs Air with beautifull location we will 
            provide you.This is our commitment. 
            <br />
            We will ensure you best service.Business classs Air with beautifull location we will 
            provide you.This is our commitment.
            <br />
            We will ensure you best service.Business classs Air with beautifull location we will 
            provide you.This is our commitment.
            <br />
            We will ensure you best service.Business classs Air with beautifull location we will 
            provide you.This is our commitment.
            
            </small></p>
        </div>
    );
};

export default Order;