import React from "react";
import "./DashboardHome.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Nav } from "react-bootstrap";

const DashboardHome = () => {
    return (
    <div className="my-5 dashbody">
        <h3 style={{ borderBottom: '2px solid #ff871d' , paddingBottom: '10px', display: 'inline-block'}}>Contact Us</h3>

        <div className="">
        <p style={{color: '#ff871d '}}><i class="fas fa-phone-alt"></i><a href="tel:+4733378901" style={{color: 'black', textDecoration: 'none', marginLeft: '20px'}}>+47 333 78 901</a></p>
        <p style={{color: '#ff871d '}}><i class="fas fa-phone-alt"></i><a href="tel:+880 14568399" style={{color: 'black', textDecoration: 'none', marginLeft: '20px'}}>+880 14568399</a></p>
        <p style={{color: '#ff871d '}}><i class="fas fa-phone-alt"></i><a href="tel:+880 19 45998" style={{color: 'black', textDecoration: 'none', marginLeft: '20px'}}>+880 19 45998</a></p>
        <p style={{color: '#ff871d '}}><i class="fas fa-phone-alt"></i><a href="tel:+880 34447781" style={{color: 'black', textDecoration: 'none', marginLeft: '20px'}}>+880 34447781</a></p>

        </div>
    </div>
    );
};

export default DashboardHome;