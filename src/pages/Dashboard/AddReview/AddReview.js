import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';


const AddReview = () => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        console.log(data);
        fetch('https://fast-wave-21808.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result => {
            // console.log(result);
            if(result.insertedId){
                alert('review added successfully');
                reset();
            }
        })
    };
    return (
        <div className='my-5'>
            <h1 style={{color: '#ff871d'}}>Add your precious review</h1>
            <div className="my-5">
        <h2 style={{color:'#ff871d', marginBottom:'60px'}}>Please Fill this form!!!</h2>
        <form className="book-form " style={{marginLeft: '300px'}} onSubmit={handleSubmit(onSubmit)}>
          {user.displayName && <input defaultValue={user.displayName} {...register("name")} />}

          <input
            placeholder="Your image url"
            defaultValue=""
            {...register("image")}
          />
          <input
            placeholder="write review"
            defaultValue=""
            {...register("review")}
          />
          
          <input
            placeholder="ratting out of 5"
            defaultValue=""
            {...register("ratting")}
          />

          <input style={{backgroundColor: '#ff871d'}} type="submit" />
        </form>
      </div>
        </div>
    );
};

export default AddReview;