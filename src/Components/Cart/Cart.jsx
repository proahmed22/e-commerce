import React, { useContext, useEffect } from "react";
import style from './Cart.module.css';
import { cartContext } from '../../Context/cartContext';


export default function Cart() {

  let { numOfCartItems, totalCartPrice, cartProducts } = useContext(cartContext);



  return <>
{
      cartProducts !== null ? <div className="bg-main-light p-4 my-4">
        <h3 className="fw-bolder text-main">Fresh Cart</h3>
        <h6 className="text-min"> Total Price : {totalCartPrice} EGP </h6>
        {cartProducts.map( function(product ,idx) {
          return <div className="row">
          <div className="col-md-1">
            <img src={product.product.imageCover} className="w-100" alt="" />
          </div>
          <div className="col-md-11">
            <h6>{product.title}</h6>
            <h6> Price : {product.price}</h6>
          </div>
        </div>
        
        })}
      </div> : ''
    }




  </>
}
