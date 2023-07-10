import React, { useContext, useEffect, useState } from "react";
import style from "./FeaturedProducts.module.css";
import axios from "axios";
import LodingScreen from './../LodingScreen/LodingScreen';
import { Link } from "react-router-dom";
import ProDetails from "../ProDetails/ProDetails";
import MySlider from "../Slider/MySlider";
import { toast } from 'react-hot-toast';
import { cartContext } from "../../Context/cartContext";

export default function FeaturedProducts() {

  let { addToCart } = useContext(cartContext);

  async function addMyProduct(id) {

    if (await addToCart(id) == true) {

      toast.success('Product added successfully to your cart')
    
    }else{
      toast.error('Product added Error')

    }
  }


  const [product, setProducts] = useState(null);

  async function getProducts() {
    let { data } = await axios.get(
      "https://route-ecommerce.onrender.com/api/v1/products"
    );

    setProducts(data.data);
  }


  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>

      {product ?

        <div className="container mt-3">
          <MySlider />

          <div className="row mt-3">
            {product.map((product, idx) => (
              <div key={idx} className="col-md-2">

                <Link to={`/ProDetails/${product._id}`}>

                  <div className="upper">

                    <div className="product cursor-pointer px-2 py-3">

                      <img className="w-100  rounded-1" src={product.imageCover} alt={product.title} />


                      <h3 className="h6 fw-bolder"> {product.title.split(" ").slice(0, 2).join(" ")} </h3>

                      {/* <span className="text-main fw-bold font-sm"> Brand : {product.brand.name} </span> */}

                      <div className="d-flex justify-content-between">

                        <span className=" text-muted "> {product.priceAfterDiscount ? <>

                          <span className=" text-decoration-line-through">{product.price}</span>

                          <span className=" ms-1">{product.priceAfterDiscount}</span>

                        </> : product.price}  <span className="">EGP</span></span>

                        <span className=""> <i className="fas fa-star rating-color "></i> {product.ratingsAverage} </span>

                      </div>

                    </div>

                  </div>

                </Link>
                <div className="lower ">
                  <button onClick={function () { addMyProduct(product._id) }} className=" product  btn bg-main text-white w-100">Add +</button>

                </div>


              </div>
            ))}</div>
        </div>
        : <LodingScreen />}

    </>
  );
}
