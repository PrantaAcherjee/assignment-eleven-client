import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';

const Order = () => {
    const {_id}=useParams();
    const [order,setOrder]=useState({})
    useEffect(()=>{
        fetch(`https://cryptic-harbor-59269.herokuapp.com/${_id}`)
        .then(res=>res.json())
        .then(data=>setOrder(data));
    },[])
    return (
        <div>
        <h2>This is order:{_id}</h2>
        <h2>{order.Name}</h2>
        <Link to="/confirm">
        <button className="text-white bg-danger">Confirm Order</button>
        </Link>
        </div>
    );
};

export default Order;