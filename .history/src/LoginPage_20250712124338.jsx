import React, { useState } from 'react'
// import {Navigate, useNavigate} from 'react-router-dom';
import "./LoginPage.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const[email , setEmail]=useState('')
    const [password , setPassword] = useState('')
    const navigate= useNavigate();

const handleSubmit =(e)=>{
    e.preventDefault();

 const hardcoreMail="login@gmail.com";
 const hardcorePassword = '1234567'

    if (email === hardcoreMail && password === hardcorePassword) {
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Optional: Redirect after 2 seconds
      setTimeout(() => {
        navigate("/dashboard"); // Or wherever you want to navigate
      }, 2000);
    } else {
      toast.error("Invalid Credentials", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };


  return (
 <div className="login-container">
      
      <div className="signup-redirect">
        <p>
          Don’t have an account?{' '}
          <span className="signup-link" onClick={() => navigate('/sign-up')}>
            Sign Up
          </span>
          {/* <span className="signup-link" >
            Sign
          </span> */}
        </p>
      </div>

      

    <div>


        
    </div>

      <form className="login-form" onSubmit={handleSubmit}>
      <div className="title">
        <h1>Log In</h1>
        <p>Hey there, welcome back!</p>
      </div>
      <label className='form-label'>Email</label>
        <input
          type="email"
          className="form-input"
          value={email}
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className='form-label'>Password</label>
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

           <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        /><ToastContainer />
      </form>
    </div>
  );
}

export default LoginPage
