import React from 'react';
import "./AddService.css"
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        // console.log(data);
        axios.post('https://cryptic-harbor-59269.herokuapp.com/services',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('successfully added');
                reset();
            }
        })
    }
    return (
        
             
            <div className="services-section add-product">
            <h4 className='text-start my-4 px-2'>Add products</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="common-form">
            
             <input {...register("Name")} placeholder="Products name"/>           
             <input type="number" {...register("Price of products")} placeholder="Price"/>
             <input {...register("img")} placeholder="Insert a image URL" />
             <textarea {...register("description")}  placeholder="Short description" />
            <input type="submit" />
            </form>
        </div>
         
    );
};

export default AddService;