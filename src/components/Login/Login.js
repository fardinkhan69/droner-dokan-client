import React, { useContext, useState } from 'react';
import Header from '../Header/Header'
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }else {
        firebase.app(); // if already initialized, use that one
     }

    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    
    
    const handleGoogleSignIn = () => {
        
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                console.log(result.user)
               
                const {displayName,email,photoURL}= result.user;

                const signedInUser = {name:displayName,email,photoURL};
                setLoggedInUser(signedInUser)
                console.log(signedInUser)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    return (
        <div>
           <Header></Header>
            <div className="container align-center-container">
                <div className="mt-3 login-form">

                    <button onClick={handleGoogleSignIn} className="w-100 btn btn-primary social-btn mb-2"><span>Continue With Google </span></button>
                    <button className="w-100 btn btn-primary social-btn "><span>Continue With Facebook </span></button>
                    {/* <FontAwesomeIcon icon={faFacebook} /> */}
                </div>
                <div>

                    
                </div>
            </div>
        </div>
    );
};

export default Login;