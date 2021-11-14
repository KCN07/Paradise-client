import { Alert, Button } from "react-bootstrap";
import React, { useState } from 'react';
import useAuth from './../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        // console.log(email);
        const user = { email };
        fetch('https://fast-wave-21808.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div className="add-service form my-5">
            <h2 style={{ color: "#ff871d" }}>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input
                    style={{ width: '50%' , padding: '10px'}}
                    placeholder="Your email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" className="m-3" style={{backgroundColor: '#ff871d', border: 'none'}}>Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;