import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then(result => {
                const { displayName, email } = result.user;
                const signInUser = { Name: displayName, email }
                setLoggedInUser(signInUser)
                history.replace(from)



            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, errorMessage, email)

            });

    }

    return (
        
            <div className="d-flex justify-content-center mt-3">
            <div className="form-style shadow p-3 text-center">
                <h2>Create An Account</h2>
                <form className="text-left">
                    <div className="form-group">
                        <label>First name</label> 
                        <input name="name" type="text" className="form-control" placeholder="Enter your first name" />
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" name="email" className="form-control"placeholder="Enter your last name" required />
                    </div>
                    <div className="form-group">
                       <label>Email address</label>
                       <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                       <label>Password</label>
                       <input type="password" className="form-control" placeholder="Enter password" required/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                       Already registered <a href="#">sign in?</a>
                    </p>
                    <p className="text-center">Or</p>
                    <hr />
                    <button className="btn btn-info btn-block" onClick={handleGoogleSignIn}>Continue With Google</button>
                </form>
                
                
            </div>
            
        </div>
   
    );
};

export default Login;