import React, { useEffect, useState } from "react";
import style from "./Brands.module.css";
import axios from "axios";
import LodingScreen from './../LodingScreen/LodingScreen';
import { Link } from 'react-router-dom';

export default function Brands() {

  const [allBrands, setallBrands] = useState(null)

  async function getAllBrands() {

    const { data } = await axios.get('https://route-ecommerce.onrender.com/api/v1/brands')

    setallBrands(data.data)


  }

  useEffect(function () {

    getAllBrands()

  }, [])


  return (
    <>
      {allBrands ? <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <div className="titel">
              <h3 className="">Our Brands</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.

              </p>
            </div>
          </div>

          {allBrands.map(function (barnds, idx) {
            return <div key={idx} className="col-md-3">

              <Link to={`/brandsproduct/${ barnds._id}`}>
                <div className="barnds text-center cursor-pointer   py-4">

                  <img className="w-100" src={barnds.image} alt={barnds.name} />

                  <h6 className="text-muted">{barnds.name}</h6>

                </div>


              </Link>
            </div>
          })}
        </div>
      </div> : <LodingScreen />}
    </>
  );

}