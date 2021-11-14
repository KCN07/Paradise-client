import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fast-wave-21808.herokuapp.com/products")
        .then(res=>res.json())
        .then(data => setProducts(data))
    }, [])

    const handleDeleteProduct = id => {
        
        const proceed = window.confirm('Are you sure, you want to delete this product?');
        if(proceed){
            
            const url = `https://fast-wave-21808.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingProduct = products.filter(order => order._id !== id);
                        setProducts(remainingProduct);
                    }
                });
        }
        
    }

    return (
        <div className="manage-order  my-5" style={{paddingLeft: '200px'}}>
            <h2 className="my-5" style={{color: '#ff871d'}}>Manage All Products</h2>
            <div className="booking-container row container" style={{marginLeft: 'auto', }}>
                {
                    products.map(product=> <Card key={product._id} style={{ width: '18rem' }} className="m-2">
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>
                        {product.description}
                      </Card.Text>
                      <Card.Title style={{color: '#ff871d'}}> {product.price} USD</Card.Title>
                      
                      <Button onClick={() => handleDeleteProduct(product._id)} style={{backgroundColor: '#ff871d', border: 'none', width: '10rem'}}>Remove Collection</Button>
                    </Card.Body>
                  </Card>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;