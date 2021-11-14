import React from 'react';
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import './Product.css'

const Product = ({ displayProducts }) => {
    const {_id, name, img, description, price} = displayProducts;

    return (
      <Card className="col-md-3" style={{ width: "20rem" , margin: '10px', border: 'none'}} >
      <Card.Img variant="top" src={img} className="img-fluid" style={{height: '300px', width: '350px'}} />
      <Card.Body>
      
        <Card.Title className="title" >{name}</Card.Title>
        
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Title style={{color: '#ff871d', marginBottom: '20px'}}>${price} <span style={{color: 'black'}}>only</span></Card.Title>
        <Link to={`/purchase/${_id}`}>
        <Button style={{backgroundColor: '#ff871d', borderColor: '#ff871d', paddingLeft: '30px', paddingRight: '30px'}}>Purchase</Button>
        </Link>
      </Card.Body>
    </Card>
    );
};

export default Product;