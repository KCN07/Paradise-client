import React, { useEffect, useState } from 'react';
import { Card , Button} from 'react-bootstrap';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    

    useEffect(() => {
        fetch('https://fast-wave-21808.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data => setOrders(data))

    }, []);

    const handleUpdateOrder = id =>{
        const url = `https://fast-wave-21808.herokuapp.com/orders/${id}`;
        const order = orders.filter(item => {
            return item._id === id;
        })
         order[0].status = 'shipped';
        // console.log(order[0]);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order[0])
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Updated Successfully');
                
            }
        })
        
    }
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
                        const remainingOrder = orders.filter(order => order._id !== id);
                        setOrders(remainingOrder);
                    }
                });
        }
        
    }
    return (
        <div className="manage-order  my-5" style={{paddingLeft: '200px'}}>
            <h2 className="my-5" style={{color: '#ff871d'}}>Manage All Orders</h2>
            <div className="booking-container row container" style={{marginLeft: 'auto', }}>
                {
                    orders.map(order=> <Card key={order.order.email} style={{ width: '18rem' }} className="m-2">
                    <Card.Img variant="top" src={order.order.img} />
                    <Card.Body>
                      <Card.Title>{order.order.name}</Card.Title>
                      <Card.Text>
                        {order.order.description}
                      </Card.Text>
                      <Card.Title style={{color: '#ff871d'}}> {order.order.price} USD</Card.Title>
                      <Button onClick={() => handleUpdateOrder(order._id)} style={{backgroundColor: '#ff871d', border: 'none', width: '10rem'}}className="me-2">{order.status}</Button>
                      <Button onClick={() => handleDeleteOrder(order._id)} style={{backgroundColor: '#ff871d', border: 'none', width: '10rem'}}>Delete Order</Button>
                    </Card.Body>
                  </Card>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;