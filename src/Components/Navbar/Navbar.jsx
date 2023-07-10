import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/freshcart-logo.svg'
export default function Navbar({crrUser, clearUserData}) {
  const navigate =  useNavigate()

  function clearUser(){
    clearUserData()
    navigate('/login')
  }

  return <>

    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          <img src={logo} alt="freshcart" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li classNameName="nav-item">
              <Link className="nav-link " aria-current="page" to='/home'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/barnds'>Brands</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/Cart'>Cart</Link>
            </li>

          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {crrUser? <>
              <li classNameName="nav-item">
                <Link className="nav-link "  to='profile'>Profile</Link>
              </li>

              <li classNameName="nav-item">
                <span onClick={clearUser} className="nav-link ">Logout</span>
              </li>

            </> : <>
              <li classNameName="nav-item">
                <Link className="nav-link "  to='/login'>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/register'>Register</Link>
              </li>

            </>}

            

          </ul>
        </div>
      </div>
    </nav>
  </>
}
