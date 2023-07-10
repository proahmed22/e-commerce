import React, { useContext, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import Brands from './Components/Brands/Brands';
import ProDetails from './Components/ProDetails/ProDetails';
import Cart from './Components/Cart/Cart';
import BrandsProduct from './Components/BrandsProduct/BrandsProduct';
import Profile from './Components/Profile/Profile';
import jwtDecode from 'jwt-decode';
import CartContextProvider from './Context/cartContext';



export default function App() {


  function Protecte({ children }) {
    if (crrUserData == null) {
      return <Navigate to='/home' />
    }
    else {
      return <>
        {children}
      </>
    }
  }

  const [crrUserData, setCrrUserData] = useState(null)
  // user Data
  function getUserData() {
    const userData = jwtDecode(localStorage.getItem('tkn'))

    //  console.log(userData);

    setCrrUserData(userData)

  }

  function clearUserData() {

    localStorage.removeItem('tkn')

    setCrrUserData(null)
  }

  useEffect(function () {
    if (localStorage.getItem('tkn') != null && crrUserData == null) {

      getUserData()

    }

  }, [])

  const router = createBrowserRouter([
    {
      path: '', element: <Layout clearUserData={clearUserData} crrUser={crrUserData} />, children: [

        { path: '', element: <CartContextProvider> <Home /> </CartContextProvider> },
        { path: 'Home', element: <CartContextProvider> <Home /> </CartContextProvider> },
        { path: 'Prodetails/:id', element: <Protecte>  <CartContextProvider> <ProDetails /> </CartContextProvider>  </Protecte> },
        { path: 'brandsproduct/:id', element: <CartContextProvider> <BrandsProduct /> </CartContextProvider> },
        { path: 'barnds', element: <CartContextProvider> <Brands /> </CartContextProvider> },
        { path: 'profile', element: <Protecte> <Profile crrUser={crrUserData} /> </Protecte> },
        { path: 'cart', element: <Protecte>  <CartContextProvider> <Cart />  </CartContextProvider> </Protecte> },
        { path: 'Login', element: <Login getUserData={getUserData} /> },
        { path: 'Register', element: <Register /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])


  return <>
  <Toaster/>
    <RouterProvider router={router} />

  </>
}
