import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();
    // console.log(user.email);
    useEffect(() => {
        fetch(`https://fast-wave-21808.herokuapp.com/myPurchase/${user.email}`)
        .then(res=> res.json())
        .then(data=>{
            setOrders(data);
             console.log(data)
        })
        
    }, []);

    const handleDeleteOrder = id => {
        
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed){
            
            const url = `https://fast-wave-21808.herokuapp.com/myPurchase/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = orders.filter(order => order._id !== id);
                        setOrders(remainingUsers);
                    }
                });
        }
        
    }

    return (
        <div className='my-5' style={{paddingLeft: '200px'}}>
            <h1 style={{color: '#ff871d'}}>My Orders</h1>
            <h2 style={{color: '#ff871d'}}>Total Order : {orders?.length}</h2>
            <div className="container row my-5" style={{marginLeft: 'auto'}}>
            {
                orders?.map(order => <Card key={order.order.id} style={{ width: '18rem'}} className="m-2 col-md-4">
                <Card.Img variant="top" src={order.order.img} />
                <Card.Body>
                  <Card.Title>{order.order.name}</Card.Title>
                  <Card.Text>
                    {order.order.description}
                  </Card.Text>
                  <Button onClick={() => handleDeleteOrder(order._id)} style={{backgroundColor:'#ff871d', border: 'none',width: '10rem' }}>Cancel Booking</Button>
                </Card.Body>
              </Card>)
            }
            </div>
        </div>
    );
};

export default MyOrders;

// onClick={() => handleDeleteOrder(order._id)}