import React from 'react';
import Contact from '../Contact/Contact';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div id="login">
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-primary">Google Sign in</button>
            <Contact></Contact>
        </div>
    );
};

export default Login;