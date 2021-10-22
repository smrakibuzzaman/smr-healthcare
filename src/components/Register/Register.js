import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const {handleUpdateUser, handleSubmit, handleEmail, handlePassword,error, toggleLogin, isLogin} = useAuth();
    return (
        <div>
            <div>
                <h2>{isLogin ? "Login" : "Register"}</h2>
                <form onSubmit={handleSubmit}>
                {!isLogin && <input onBlur={handleUpdateUser} type="name" name="" id="" placeholder="Name"/>} <br />                   
<input onBlur={handleEmail} type="email" name="" id="" placeholder="Email"/>  <br />                 
<input onBlur={handlePassword} type="password" name="" id="" placeholder="password" /> <br />
<h6 className="text-danger">{error}</h6>
<input onClick={handleSubmit} type="submit" value="submit" />
<p> <input onChange={toggleLogin} type="checkbox" name="checkbox" id="" /> Already have an account?
    <br />
    <Link to="/login">Login</Link>
</p>
                </form>

            </div>
            <Contact></Contact>
        </div>
    );
};

export default Register;