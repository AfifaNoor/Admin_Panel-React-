import React, { useState } from 'react'

const LoginPage = () => {
    // const[email , setEmail]=useState('')
    // cont [password , setPassword] = useState('')

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
    
    <input type='text'
     className='input-field' 
     placeholder='Username'

     />

    <input type='password'
    className='input-feild' 
    placeholder='Password'

    />
    <button className='login-btn'
    type='submit'>
        Login
    </button>
      
    </div>
  )
}

export default LoginPage
