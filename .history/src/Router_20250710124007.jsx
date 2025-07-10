import React from 'react';
import { createBrowserRouter , createRoutesFromElements , Route } from 'react-router-dom';
import LoginPage from './LoginPage';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path='/sign-up' element={<SignUp/>}/>
      <ROute path='login-page' element={<LoginPage/>}/>
    </>
  )
)

export default Router
