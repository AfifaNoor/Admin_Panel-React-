import React from 'react';
import { createBrowserRouter , createRoutesFromElements , Route , Navigate} from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import AdminPanel from './AdminPanel';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='login-page' element={<LoginPage/>}/>
      <Route path ="/" element = {<AdminPanel/>}/>

    </>
  )
)

export default Router;
