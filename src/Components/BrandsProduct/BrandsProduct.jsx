import React from 'react'
import style from './BrandsProduct.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LodingScreen from '../LodingScreen/LodingScreen';
import { Link, useParams } from 'react-router-dom';

export default function BrandsProduct() {


  const { id } = useParams()
  const [prandsPro, setPrandsPro] = useState(null)

  async function getBrandsProducts() {

    try {

      const { data } = await axios.get('https://route-ecommerce.onrender.com/api/v1/products', {
        params: { 'brand': id }
      })
      console.log(data.data);
      setPrandsPro(data.data)

    } catch (error) {

      console.log('error', error);

    }
  }

  useEffect(function () {

    getBrandsProducts()

  }, [])


  return <>
    {prandsPro ? <div className="container">
      <div className="row">

        {prandsPro.length == 0 ? <h1 className=' vh-100   align-content-center d-flex  my-5 justify-content-center '>
          No Products Available right Now <span>&#128549;</span>

        </h1> : prandsPro.map(function (pro, idx) {
          return <div key={idx} className="col-md-4">
            <Link to=''>
            
            <Link to={`/ProDetails/${pro._id}`}>
          
          <div className="brandsprod cursor-pointer align-content-center px-2 py-3">

              <img className="w-75 py-4 my-5  rounded-1" src={pro.imageCover} alt={pro.title} />


              <h3 className="h6 fw-bolder"> {pro.title.split(" ").slice(0, 2).join(" ")} </h3>

              <div className="d-flex justify-content-between">

                <span className=" text-muted "> {pro.priceAfterDiscount? <>

                <span className=" text-decoration-line-through">{pro.price}</span>

                <span className=" ms-1">{pro.priceAfterDiscount }</span>

                </>: pro.price}  <span className="">EGP</span></span>

                <span className=""> <i className="fas fa-star rating-color "></i> {pro.ratingsAverage} </span>

              </div>


            </div>
          </Link>

            </Link>
          

          </div>
        })}



      </div>
    </div> : <LodingScreen />}
  </>
}
