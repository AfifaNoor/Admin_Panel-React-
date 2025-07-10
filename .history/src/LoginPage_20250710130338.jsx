import React, { useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom';
import "./LoginPage.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const[email , setEmail]=useState('')
    const [password , setPassword] = useState('')
    // const navigate= useNavigate();

const handleSubmit =(e)=>{
    e.preventDefault();

 const hardcoreMail="login@gmail.com";
 const hardcorePassword = '1234567'

    if (email=== hardcoreMail && password === hardcorePassword){
        alert("Login Successfull")
        // navigate("/sign-up")
    }else{
        alert("Invalid Credential")
    }

}
   


  return (
 <div className="login-container">
      
      <div className="signup-redirect">
        <p>
          Don’t have an account?{' '}
          <span className="signup-link" onClick={() => navigate('/sign-up')}>
            Sign Up
          </span>
        </p>
      </div>

      <div className="header">
        <h1>Log In</h1>
        <p>Hey there, welcome back!</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-input"
          value={email}
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="form-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="login-btn" type="submit">
          Login
        </button>

        <ToastContainer />
      </form>
    </div>
  );
}

export default LoginPage
