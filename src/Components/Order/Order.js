import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import UseAuth from '../../Hooks/UseAuth';

const Order = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {user}=UseAuth();
    const {_id}=useParams();
    const [order,setOrder]=useState({})

    useEffect(()=>{
        fetch(`https://cryptic-harbor-59269.herokuapp.com/services/${_id}`)
        .then(res=>res.json())
        .then(data=>setOrder(data));
        },[])

    const onSubmit = data => {
        // console.log(data);
        data.email = user?.email;
        fetch("https://cryptic-harbor-59269.herokuapp.com/orders", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) =>{
            if(result.insertedId){
              alert('order successfully confirmed');
              reset();
            }
          });
        
      }
    
    return (
        <div className="row">
        <h2 className="h-2">Get Your Service</h2>
        <div className="col-md-8">
        <h2 className="text-secondary">Country Name: {order.Name}</h2>
        <img src={order.img} alt="" />
        <br />
        <br />
        
        <h6 className="text-success">Price: ${order.price}</h6>
        </div>
        <div className="col-md-4">
            <h2 className="text-secondary">Confirmed Soon</h2>
            <form className="confirm-form" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name")} />
        <input defaultValue={user.email} {...register("email", { required: true })}/>
        <input defaultValue={order.Name} {...register("Service",{required:true})} />
        <input placeholder="Adress" defaultValue="" {...register("adress")} />
        <input placeholder="Phone" defaultValue="" {...register("phone")} />
         {errors.email && <span className="error">This field is required</span>}
        <input type="submit" />
    </form>
        </div>
        </div>
    );
};

export default Order;