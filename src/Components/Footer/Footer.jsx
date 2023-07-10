import React from "react";
import style from "./Footer.module.css";
import btn1 from "../../images/appstore-btn.svg";
import btn2 from "../../images/googleplay-btn.svg";
import visa from "../../images/visa.svg";
import paypal from "../../images/paypal.svg";
import mastercard from "../../images/mastercard.svg";
import amazonpay from "../../images/amazonpay.svg";
import american from "../../images/american-express.svg";

export default function Footer() {
  return (
    <>
      <footer className="py-4">
        <h2 className=" ms-4">Get The FreshCart App</h2>

        <p className=" ms-4 pt-2">
          We Will Spend You a Link , Open It On Your Phone To Download The App
        </p>

        <div className="container mb-4 d-flex  justify-content-between">
          <input
            className=" form-control w-75 "
            type="text"
            placeholder="Email.."
          />
          <button className="btn  btn-success ms-3 w-25">Share App Link</button>
        </div>
        <div className=" container d-flex   border-top border-bottom border-2 p-4  ">
          <div className="container">
            <div className="row">
              <div className="col-4 d-flex">
                <ul className="list-unstyled d-flex justify-content-between  align-items-center me-4 ">
                  <li className=" text-dark">
                    <h6 className=" ms-5">Payment Partners</h6>
                  </li>
                  <li>
                    <img src={visa} alt="visa" />
                  </li>
                  <li>
                    <img src={paypal} alt="paypal" />
                  </li>
                  <li>
                    <img src={mastercard} alt="mastercard" />
                  </li>
                  <li>
                    <img src={amazonpay} alt="amazonpay" />
                  </li>
                  <li>
                    <img src={american} alt="american-express" />
                  </li>
                </ul>
              </div>

              <div className="col-8">
                <ul className=" list-unstyled d-flex justify-content-between  align-items-center">
                  <li className=" mb-2 mb-md-0 text-dark">
                    <h6> Get deliveries with FreshCart</h6>
                  </li>
                  <li> <img src={btn1} alt="appstore-btn" />
                  </li>
                  <li ><img src={btn2} alt="googleplay-btn" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

    
    </>
  );
}


{/* <div class="bg-light p-5 mt-5">
<h3>Get the FreshCart app</h3>
<p class="text-muted">We wilkl send you a link, open it on your phone to download the app</p>
<div class="row ps-5"><div class="col-md-10">
<input type="email" placeholder="Email" class="form-control"/> </div>
<div class="col-md-2"><button class="btn bg-btn text-white w-100">Share App Link</button></div></div>
<div class="border-bottom border-top border-1 row justify-content-between mt-5 mb-3 py-3">
<div class="col-md-5 d-flex"><h6 class="me-2 mt-3">Payment Partners</h6>
<img src=" " class="w-50 mt-1" alt=""/></div>
<div class="col-md-4 d-flex">
<h6 class="me-2 mt-3">Get deliveries with FreshCart</h6>
<img src="/static/media/mobileApp.d80a2530947228ac9c1d.PNG" class="w-50" alt=""/>
</div>
</div>
<div> */}