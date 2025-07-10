import React, { useState } from 'react'

const LoginPage = () => {
    const[email , setEmail]=useState('')
    cont [password , setPassword] = useState('')

const handleSubmit =(e)=>{
    e.preventDefault();

 const hardcoreMail="login@gmail.com";
    const hardcorePassword = '1234567'

    if (email=== hardcoreMail && password === hardcorePassword){
        alert("Login Successfull")
    }else{
        alert("Invalid Credential")
    }

}
   


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
    <form className='login-form' onSubmit={handleSubmit}>
    <input type='email'
     className='input-field' 
     value={email}
     placeholder='Enter Your Email'
     onChange={(e)=> setEmail}
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
