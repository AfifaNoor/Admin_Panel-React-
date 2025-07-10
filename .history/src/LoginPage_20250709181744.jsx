import React, { useState } from 'react'

const LoginPage = () => {
    const[email , setEmail]=useState('')
    cont [password , setPassword] = useState('')

  return (
    <div className='login-container'>
    <input type='text'
     className='input-field' 
     placeholder='Username'

     />

    <input type='password'
    className='input-feild' 
    placeholder='Password'

    />
    <button className='subm'
    type='submit'>
        Submit
    </button>
      
    </div>
  )
}

export default LoginPage
