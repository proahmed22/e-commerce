import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import $     from  'jquery'
import { useNavigate } from "react-router-dom";

export default function Register() {

  
  let user = {
    name : "" ,
    email : "",
    password : "",
    rePassword : "",
    phone : "",
  }

 const navigate =  useNavigate()

async function registNewUser( body ){
  try{
    let { data } = await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signup', body)
    // console.log(data);

    if( data.message == 'success'){
      $('.sucMs').fadeIn(1000,function(){
        navigate('/Login')
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
      registNewUser( values )
    },

    validate:function( values ){
      let errors ={};

      if(values.name.length < 3 || values.name.length > 10){
        errors.name = "Name Must be More Then 3 Characters and Less Than 10. "
      }

      if(values.email.includes('@') == false  || values.email.includes('.com') == false){
        errors.email = 'Email Must be Valid. '
      }

      if(values.password.length <6 ||values.password.length >12){
        errors.password = 'PassWord Must Be From 6  To 12 Characters Only. '
      }

      if(values.password != values.rePassword){
        errors.rePassword = 'PassWord Must Be Match Re PassWord. '
      }


      if( ! values.phone.match(/^(20)?01[0125][0-9]{8}$/)){
        errors.phone = 'The Phone must be Egyptian.'
      }

      return errors;
    }

  }
  )

  return (
    <>
      <div className=" container py-5">
        <h2>Register Now:</h2>

        <div style={ {'display' :'none'} } className=" errMs alert alert-danger  mt-2 text-center">Account Already In  Use</div>

        <div style={ {'display' :'none'} } className=" sucMs alert alert-success mt-2 text-center"> Registered Successfully</div>



        <form onSubmit={ myFormik.handleSubmit}>

          {/* Start Formik For name */}
          <label className="mt-3" htmlFor="name">name:</label>
          <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange}  value={myFormik.values.name} id="name" className=" form-control" type="text" placeholder="name.." />
          {myFormik.errors.name && myFormik.touched.name ?<div className="alert alert-danger text-center">{myFormik.errors.name}</div> :''}

          {/* Start Formik For Email */}
          <label className="mt-3" htmlFor="email">Email:</label>
          <input onBlur={myFormik.handleBlur}  on onChange={myFormik.handleChange} value={myFormik.values.email} id="email" className=" form-control" type="email" placeholder="Email.."  />
          {myFormik.errors.email && myFormik.touched.email ?<div className="alert alert-danger text-center">{myFormik.errors.email}</div>:''}


          {/* Start Formik For PassWord */}
          <label className="mt-3" htmlFor="password"> password:</label>
          <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.password} id="password" className=" form-control" type="password" placeholder="Password.." />
          {myFormik.errors.password && myFormik.touched.password ?<div className="alert alert-danger text-center">{myFormik.errors.password}</div>:''}


          {/* Start Formik For RePassWord */}
          <label className="mt-3" htmlFor="rePassword"> rePassword: </label>
          <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.rePassword} id="rePassword" className=" form-control" type="password" placeholder="rePassword.." />
          {myFormik.errors.rePassword && myFormik.touched.rePassword ?<div className="alert alert-danger text-center">{myFormik.errors.rePassword}</div>:''}


          {/* Start Formik For Phone */}
          <label className="mt-3" htmlFor="phone">Phone:</label>
          <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.phone} id="phone" className=" form-control" type="text" placeholder="Phone.."/>
          {myFormik.errors.phone && myFormik.touched.phone ?<div className="alert alert-danger text-center">{myFormik.errors.phone}</div>:''}

        <button type="submit" className="btn btn-info mt-3">Register</button>
        </form>
      </div>
    </>
  );
}
