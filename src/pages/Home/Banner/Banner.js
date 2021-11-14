import React from "react";
import "./Banner.css";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Nav } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="hero-image" 
    style={{marginBottom: '80px'}}
    >
      <div className="hero-text" >
        <h1 style={{fontSize: '70px', width:"70%", paddingBottom:"10px"}}>Paradise</h1>
        <h4>Style Destination</h4>
        <p>Your Ultimate choice for dining</p>
        <Nav.Link as={HashLink} to="/home#displayProducts">
        <Button className="p-2 px-4" style={{ borderColor: 'white', fontSize: "15px", fontWeight: 'medium', backgroundColor: 'white' , color:'black'}}> SHOP NOW</Button>
        </Nav.Link>
      </div>
    </div>
  );
};

export default Banner;