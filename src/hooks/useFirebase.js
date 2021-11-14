import React from 'react';
import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import initializeFirebase from '../pages/Account/Login/Firebase/firebase.init';
import { Redirect } from 'react-router';

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password, history)
        .then((userCredential) => {
            setAuthError('');
            const newUser = { email, displayName: name };
            setUser(newUser);

            // save user to the database
            saveUser(email, name, 'POST');
            history.replace('/');
            
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
        })
        .catch((error) => {
            setAuthError(error.message);
            console.log(error);
        })
        .finally(() => setIsLoading(false));
}

const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
}

// observer user state
useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
            console.log(user);
        } else {
            setUser({})
        }
        setIsLoading(false);
    });
    return () => unsubscribed;
}, [])

useEffect(() => {
    fetch(`https://fast-wave-21808.herokuapp.com/users/${user.email}`)
    .then(res=> res.json())
    .then(data=> setAdmin(data.admin))
  }, [user.email])

const logout = (history) => {
    setIsLoading(true);
    signOut(auth).then(() => {
        // Sign-out successful.
        history.replace('/')
      }).catch((error) => {
        // An error happened.
      })
        .finally(() => setIsLoading(false));
}

const saveUser = (email, displayName, method) =>{
    const user = {email, displayName};
    console.log(user);
    
    fetch('https://fast-wave-21808.herokuapp.com/users', {
      method: method,
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then()

  }

    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout
    }
};

export default useFirebase;