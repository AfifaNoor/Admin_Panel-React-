import React, { useState } from 'react'

const LoginPage = () => {
    // const[email , setEmail]=useState('')
    // cont [password , setPassword] = useState('')

  return (
    <div className='login-container'>
    <h1 className='title'>Log In </h1>
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
