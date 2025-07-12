import React from 'react';
import { createBrowserRouter , createRoutesFromElements , Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import AdminPanel from './AdminPanel';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/' element={<LoginPage/>}/>
      <Route path ="/admin-panel" element = {<AdminPanel/>}/>

    </>
  )
)

export default Router;
