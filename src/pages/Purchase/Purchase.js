import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Card, Button } from "react-bootstrap";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Purchase.css'

const Purchase = () => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm();
    const { user } = useAuth();
    const [details, setDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fast-wave-21808.herokuapp.com/products/${id}`)
        .then(res=>res.json())
        .then(data => setDetails(data))
    }, [])

    const onSubmit = data => {
        const orderDetails = details;
        data.order =  orderDetails;
        data.status = 'pending';
        fetch('https://fast-wave-21808.herokuapp.com/myPurchase', {
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
                alert('order processed successfully');
                reset();
            }
        })
    };

    return (
        <div className="Booking-container container my-5">
        
      <div className="detail my-5">
        <Card style={{ width: "28rem", border: 'none' }}>
          <Card.Img variant="top" src={details.img} />
          <Card.Body>
            <Card.Title style={{color:'#ff871d'}}>{details.name}</Card.Title>
            <Card.Text>{details.description}</Card.Text>
            <Card.Title style={{color:'#ff871d'}}>{details.price} USD Only</Card.Title>
          </Card.Body>
        </Card>
      </div>

      <div className="my-5">
        <h2 style={{color:'#ff871d', marginBottom:'60px'}}>Please Fill this form!!!</h2>
        <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
          {user.displayName && <input defaultValue={user.displayName} {...register("name")} />}

          <input
            defaultValue={user.email}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Address"
            defaultValue=""
            {...register("address")}
          />
          
          <input
            placeholder="phone number"
            defaultValue=""
            {...register("phone")}
          />

          <input style={{backgroundColor: '#ff871d'}} type="submit" />
        </form>
      </div>
    </div>
    );
};

export default Purchase;