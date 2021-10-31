import React from 'react';
import "./Confirm.css"
import { useForm } from "react-hook-form";
import UseAuth from '../../Hooks/UseAuth';

const Confirm = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {user}=UseAuth();
  const onSubmit = data => {
    console.log(data);
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
        <div>
            <h2>Confirm Order</h2>

        <form className="confirm-form" onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user.displayName} {...register("name")} />
      <input defaultValue={user.email} {...register("email", { required: true })} />
      <input placeholder="Adress" defaultValue="" {...register("adress")} />
      <input placeholder="Service Name" defaultValue="" {...register("city")} />
      <input placeholder="Phone" defaultValue="" {...register("phone")} />
         {errors.email && <span className="error">This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Confirm;