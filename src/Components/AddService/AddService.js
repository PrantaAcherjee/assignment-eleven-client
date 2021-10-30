import React from 'react';
import "./AddService.css"
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('successfully added');
                reset();
            }
        })
    }
    return (
        <div className="manage-service">
            <h2>Add your service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
             <input {...register("Name")} placeholder="Name"/>
            <textarea {...register("description")} placeholder="Description" />
             <input type="number" {...register("price")} placeholder="Price"/>
             <input {...register("img")} placeholder="image URL" />
            <input type="submit" />
                </form>
        </div>
    );
};

export default AddService;