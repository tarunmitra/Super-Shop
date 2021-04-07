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
            <div className=" form-style shadow p-3 text-center">
                <h2>Create An Account</h2>
                <form style={{ textAlign: 'center' }} >
                    <input name="name" type="text" placeholder="enter your name" />
                    <br />
                    <input type="text" name="email" placeholder="enter your email" required />
                    <br />
                    <input type="password" name="password" placeholder="enter your password" required />
                    <br />
                    <input className="mt-2 btn-style" type="submit" />
                </form>

                <div>
                    <p>New User? <span>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="newUser">SignUp</label> <br />
                    </span> </p>
                </div>
                <p>or</p>
                <hr />
                <button className="btn-style" onClick={handleGoogleSignIn}>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;