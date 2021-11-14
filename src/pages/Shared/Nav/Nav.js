import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth'
// import useFirebase from "../../../hooks/useFirebase";
import './Nav.css';

const Header = () => {
     const { user, logout } = useAuth();
     const history = useHistory();
    return (
        
      <Navbar  variant="light" sticky="top" collapseOnSelect expand="lg" className="bg-color p-2 shadow" >
                <Container>
                    <Navbar.Brand as={Link} to="/home" style={{ fontSize: '40px', color: 'black', fontWeight: 'bolder'}}>Paradise</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" style={{ fontSize: '17px', color: 'black', fontWeight: 'bolder'}}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/explore" style={{ fontSize: '17px', color: 'black', fontWeight: 'bolder'}}>Explore Paradise</Nav.Link>
                        {user?.email ?
                        <Nav.Link as={Link} to="/dashboard" style={{ fontSize: '17px', color: 'black', fontWeight: 'bolder'}}>Dashboard</Nav.Link>: ""}

                        
                        {user?.email?
                            <Button onClick={()=>logout(history)}  style={{width:'100px', backgroundColor: '#ff871d', border: 'none'}} className="me-2">Logout</Button> :
                            <>
                            <Nav.Link as={Link} to="/login" style={{ fontSize: '20px', color: "#ff871d"}}>Login </Nav.Link>
                            <Nav.Link as={Link} to="/Register" style={{ fontSize: '20px', color: "#ff871d"}}>Register</Nav.Link>
                            </>
                            }

                        
                        
                        <Navbar.Text style={{color: "#ff871d"}}>
                            Signed in as: {user?.displayName}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      
    
    );
};

export default Header;