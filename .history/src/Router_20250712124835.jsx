import React from 'react';
import { createBrowserRouter , createRoutesFromElements , Route , Navigate} from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUp from './SignUp';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='login-page' element={<LoginPage/>}/>
      <Route path ="/" element{<Adm}

    </>
  )
)

export default Router;
