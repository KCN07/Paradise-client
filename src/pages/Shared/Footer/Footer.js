import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="ps-3">
        <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
        color: "black",
        fontFamily: "serif",
        
      }}
      className="p-5 row mb-3"
    >
     <div className="col-md-3">
     <h2 className="mb-2" style={{ fontSize: '40px', color: 'black', fontWeight: 'bolder'}}>Paradise</h2>
     <p>Sophisticated simplicity for the
      independent mind.</p>
      <div style={{ }}className="mt-2">
          <a href="#" style={{textDecoration: 'none', color: 'black', fontSize: '20px'}}><i class="fab fa-facebook-f me-3"></i></a>
          <a href="#" style={{textDecoration: 'none', color: 'black', fontSize: '20px'}}><i class="fab fa-instagram me-3"></i></a>
          <a href="#" style={{textDecoration: 'none', color: 'black', fontSize: '20px'}}><i class="fab fa-twitter me-3"></i></a>
          <a href="#" style={{textDecoration: 'none', color: 'black', fontSize: '20px'}}><i class="fab fa-pinterest-p me-3"></i></a>

      </div>
      
     </div>
     <div className="col-md-3">
        <h5 style={{ borderBottom: '2px solid black' , paddingBottom: '10px', marginBottom: '30px', display: 'inline-block', fontWeight: 'bold'}}>Help & Information</h5>

        <h6 className="list mb-3">Terms & Conditions</h6>
        <h6 className="list mb-3">Contact</h6>
        <h6 className="list mb-3">Accessories</h6>
        <h6 className="list mb-3">Term of use</h6>
     </div>
     <div className="col-md-3">
        <h5 style={{ borderBottom: '2px solid black' , paddingBottom: '10px', marginBottom: '30px', display: 'inline-block', fontWeight: 'bold'}}>About Us</h5>

        <h6 className="list mb-3">Help Center</h6>
        <h6 className="list mb-3">Address Store</h6>
        <h6 className="list mb-3">Privacy Policy</h6>
        <h6 className="list mb-3">Receivers & Amplifiers</h6>
    </div>
    <div className="col-md-3">
        <h5 style={{ borderBottom: '2px solid black' , paddingBottom: '10px', marginBottom: '30px', display: 'inline-block', fontWeight: 'bold'}}>Categories</h5>

        <h6 className="list mb-3">Delivery</h6>
        <h6 className="list mb-3">Legal Notice</h6>
        <h6 className="list mb-3">Documentation</h6>
        <h6 className="list mb-3">Secure payment</h6>
        <h6 className="list mb-3">Stores</h6>
    </div>

      
    </div>
    <p className="text-start">© Copyright 2021 | Paradise By KCN. All rights reserved.</p>
    </div>
    );
};

export default Footer;

{/* <h2 className="mb-5 border-bottom " style={{display:'inline'}}>Connect</h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}className="my-5">
          <a href="#" style={{textDecoration: 'none', color: 'black', fontSize: '20px'}}><i class="fab fa-facebook-f me-3"></i>Facebook</a>
          <a href="#" style={{textDecoration: 'none', color: 'black', fontSize: '20px'}}><i class="fab fa-instagram me-3"></i>Instagram</a>
          <a href="#" style={{textDecoration: 'none', color: 'black', fontSize: '20px'}}><i class="fab fa-twitter me-3"></i>Twitter</a>
          <a href="#" style={{textDecoration: 'none', color: 'black', fontSize: '20px'}}><i class="fab fa-pinterest-p me-3"></i>Pinterest</a>

      </div>

      <div style={{borderBottom: '1px solid white', paddingBottom:'10px',}}>
          <a href="#" style={{textDecoration: "none", color: "black", marginRight: "15px", fontSize:"18px"}}>Disclaimer</a>
          <a href="#" style={{textDecoration: "none", color: "black", marginRight: "15px", fontSize:"18px"}}>Website Privacy</a>
          <a href="#" style={{textDecoration: "none", color: "black", marginRight: "15px", fontSize:"18px"}}>Contact Web Administrator</a>
          <a href="#" style={{textDecoration: "none", color: "black", marginRight: "15px", fontSize:"18px"}}>Nondiscrimination Policy</a>
          <a href="#" style={{textDecoration: "none", color: "black", marginRight: "15px", fontSize:"18px"}}>Equal Employment Opportunity</a>
      </div> */}