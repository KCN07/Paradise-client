import React from "react";
import { useForm } from "react-hook-form";
import './AddProducts.css'

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    fetch('https://fast-wave-21808.herokuapp.com/products', {
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
            alert('added successfully');
            reset();
        }
    })
  };
  return (
    <div className="add-service form my-5">
      <h2 style={{ color: "#ff871d" }}>Add a new Product</h2>
      <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="title"  {...register("name")} />

          
          <textarea {...register("description")} placeholder="description" />
          
          <input
            placeholder="Price"
            defaultValue=""
            {...register("price")}
          />
          <input {...register("img")} placeholder="image url" />

          <input style={{backgroundColor: '#ff871d', border: 'none'}} type="submit" />
        </form>
    </div>
  );
};

export default AddProducts;