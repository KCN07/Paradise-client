import React from "react";
import "./Sale.css";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Nav } from "react-bootstrap";

const Sale = () => {
  return (
    <div className="sale-image" 
    style={{}}
    >
      <div className="hero-text" >
        <h1 style={{fontSize: '70px', width:"100%", paddingBottom:"10px"}}>Upto 15% Sell</h1>
        <h4>On Our Newly Launched collection</h4>
        <p>Hurry now</p>
        <Nav.Link as={Link} to="/explore">
        <Button className="p-2 px-4" style={{ borderColor: 'black', fontSize: "15px", fontWeight: 'medium', backgroundColor: 'black' , color:'white'}}> SHOP NOW</Button>
        </Nav.Link>
      </div>
    </div>
  );
};

export default Sale;