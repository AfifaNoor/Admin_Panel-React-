import React from 'react';
import { createBrowserRouter , createRoutesFromElements , Route } from 'react-router-dom';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path='/sign-up' element={<SignUp/>}/>
      <ROute path='login-page' element
    </>
  )
)

export default Router
