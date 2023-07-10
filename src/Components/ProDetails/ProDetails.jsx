import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import LodingScreen from '../LodingScreen/LodingScreen';
import { useParams } from 'react-router-dom';
import { cartContext } from '../../Context/cartContext';
import $, { data } from 'jquery'
import { toast } from 'react-hot-toast';
export default function ProDetails() {

  let { addToCart } = useContext(cartContext);


  async function addMyProduct(id) {

    if (await addToCart(id) == true) {

      toast.success('Product added successfully to your cart')
    
      $('#btnRe').fadeIn(500)
      $('#btnAdd').fadeOut(500)
    }else{
      toast.error('Product added Error')

    }
  }


  const { id } = useParams()

  const [prodetails, setProdetails] = useState(null)

  async function getProDetalis() {

    try {
      const { data } = await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
      console.log(data.data);
      setProdetails(data.data)


    } catch (error) {

      console.log('error', error);

    }
  }

  useEffect(function () {

    getProDetalis()

  }, [])



  return <>
    {prodetails ?
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-3">
            <img src={prodetails.imageCover} className='w-100 rounded-3' alt={prodetails.title} />
          </div>

          <div className="col-md-9">
            <h2>{prodetails.title}</h2>
            <h4 className='text-muted '>{prodetails.description}</h4>
            <h6 className='text-main fw-bold font-sm '> Quantity: {prodetails.quantity}</h6>

            <div className="d-flex justify-content-between">

              <span className=" text-muted "> Price : {prodetails.priceAfterDiscount ? <>

                <span className=" text-decoration-line-through">  {prodetails.price}</span>

                <span className=" ms-1"> {prodetails.priceAfterDiscount}</span>

              </> : prodetails.price}  <span className="">EGP</span></span>

              <span className=""> <i className="fas fa-star rating-color "></i> {prodetails.ratingsAverage} </span>

            </div>

            <button id='btnAdd' onClick={function () { addMyProduct(prodetails._id) }} className="btn bg-main text-white w-100">Add To Cart + </button>
            
            <button id='btnRe'  style={{ 'display': 'none' }} className="btn btn-danger text-white w-100"> Rmove  From Cart - </button>


          </div>

        </div>

      </div> : <LodingScreen />}
  </>
}




