import firebaseConfig from "./FirebaseConfig";
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import { useState } from "react";
import { useContext } from "react";
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router";


if (firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
        photo: "",
      });

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((res) => {
    const { displayName, email, photoURL } = res.user;
    const signInUser = {
      isSignedIn: true,
      name: displayName,
      email: email,
      photo: photoURL,
    };
    setUser(signInUser);
    setLoggedInUser(signInUser);
    history.replace(from);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    
    var errorMessage = error.message;
    setUser(errorMessage);
  });

    }
    
    return (
        <div className="login">
          <div className="button">
          <h1>Login with gmail</h1>
            <button className="btn btn-outline-secondary"onClick={handleGoogleSignIn}>Continue with Google</button>
          </div>
        </div>
    );
};

export default Login;