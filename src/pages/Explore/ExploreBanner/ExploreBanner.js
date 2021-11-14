import React from "react";
import "./ExploreBanner.css";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Nav } from "react-bootstrap";

const ExploreBanner = () => {
  return (
    <div className="explore-image" 
    style={{marginBottom: '80px'}}
    >
      <div className="hero-text" >
        <h1 style={{fontSize: '70px', width:"100%", paddingBottom:"10px"}}>All Products</h1>
        <h4>Want something Unique ?</h4>
        <p>You will find some real gem here</p>
        <Nav.Link as={HashLink} to="/explore#Products">
        <Button className="p-2 px-4" style={{ borderColor: 'white', fontSize: "15px", fontWeight: 'medium', backgroundColor: 'white' , color:'black'}}>Explore</Button>
        </Nav.Link>
      </div>
    </div>
  );
};

export default ExploreBanner;