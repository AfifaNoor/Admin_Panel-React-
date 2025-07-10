import React, { useState } from 'react'

const LoginPage = () => {
    // const[email , setEmail]=useState('')
    // cont [password , setPassword] = useState('')


    const hardCore


  return (
    <div className='login-container'>

    <div className='signup-redirect'>
         <p>
            Don't  have an account? <span className="signup-link">Sign Up</span>
         </p>
    </div>
    <div className='header'>
    <h1 className='title'>Log In </h1>
    <p>Hey There Welcome Back </p>

    </div>
    <form className='login-form'>
    <input type='email'
     className='input-field' 
     placeholder=''
     required

     />

    <input type='password'
    className='input-feild' 
    placeholder='Password'
    required

    />
    <button className='login-btn'
    type='submit'>
        Login 
    </button>
    </form>
    
      
    </div>
  )
}

export default LoginPage
