import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle, handleSubmit, handleEmail, handlePassword, error} = useAuth();


    return (
        <div id="login">
            <div> 
                <h2>Please Login</h2>
<form onSubmit={handleSubmit}>
<input onBlur={handleEmail} type="email" name="email" id="" placeholder="Email"/>
<br />
<input onBlur={handlePassword} type="password" name="password" id="" placeholder="password" />
<br />
<h6 className="text-danger">{error}</h6>
<button onClick={handleSubmit} className="btn btn-primary"type="submit">Login</button>
    </form>   
    <p>New to SMR Health Care? <br /> <Link to="/register">Create Account</Link></p>
</div>
          <div>
              <p>or</p>
              <button onClick={signInUsingGoogle} className="btn btn-primary">Google Sign in</button>
          </div>
            <Contact></Contact>
        </div>
    );
};

export default Login;