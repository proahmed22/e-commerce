import React from 'react'
import style from './Profile.module.css';

export default function Profile({crrUser}) {
  return <>
    <h1 className='text-center p-3 vh-100'>Hallo {crrUser.name} </h1>  
  </>
}
