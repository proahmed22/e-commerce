import React from 'react'
import style from './NotFound.module.css';
import notfound from '../../images/error2.jpg'

export default function NotFound() {
  return <>
    <img className=' vh-100 d-flex justify-content-center m-auto' src={notfound} alt="error404" />
  </>
}
