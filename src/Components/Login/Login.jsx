import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import $     from  'jquery'
import { useNavigate } from "react-router-dom";

export default function Login({getUserData}) {

  const navigate =useNavigate()

  let user = {

    email : "",
    password : ""

  }


async function loginUser( body ){
  try{
    let { data } = await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signin', body)
    // console.log(data);

    localStorage.setItem('tkn' , data.token)

    getUserData()

    if( data.message == 'success'){
      $('.sucMs').fadeIn(500,function(){
        navigate('/home')
      })
    }
  }
  catch(err){
    // console.log(err.response.data.message);

    $('.errMs' ).fadeIn( 1000 , function(){
      setTimeout(() => {
        $('.errMs' ).fadeOut(500)
      }, 3000);
    })
  }
  
  }




// Start Formik =>
let myFormik = useFormik({
    initialValues: user,

    onSubmit: function( values ){
      loginUser( values )
    },

    validate:function( values ){
      let errors ={};

  
      if(values.email.includes('@') == false  || values.email.includes('.com') == false){
        errors.email = 'Email Must be Valid. '
      }

      if(values.password.length <6 ||values.password.length >12){
        errors.password = 'PassWord Must Be From 6  To 12 Characters Only. '
      }

    

      return errors;
    }

  }
  )

  return (
    <>
      <div className=" container py-5 mb-4">
        <h2>Login Now:</h2>

        <div style={ {'display' :'none'} } className=" errMs alert alert-danger  mt-2 text-center"> Login error please check your email and password and try again </div>

        <div style={ {'display' :'none'} } className=" sucMs alert alert-success mt-2 text-center"> Welcome back</div>



        <form onSubmit={ myFormik.handleSubmit}>

          {/* Start Formik For Email */}
          <label className="mt-3" htmlFor="email">Email:</label>
          <input onBlur={myFormik.handleBlur}  on onChange={myFormik.handleChange} value={myFormik.values.email} id="email" className=" form-control" type="email" placeholder="Email.."  />
          {myFormik.errors.email && myFormik.touched.email ?<div className="alert alert-danger text-center">{myFormik.errors.email}</div>:''}


          {/* Start Formik For PassWord */}
          <label className="mt-3" htmlFor="password"> password:</label>
          <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.password} id="password" className=" form-control" type="password" placeholder="Password.." />
          {myFormik.errors.password && myFormik.touched.password ?<div className="alert alert-danger text-center">{myFormik.errors.password}</div>:''}


          

        
        <button type="submit" className="btn btn-info mt-3">Login</button>
        </form>
      </div>
    </>
  );
}

