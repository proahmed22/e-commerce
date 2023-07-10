import React from "react";
import style from "./LodingScreen.module.css";

export default function LodingScreen() {
  return (
    <>
        <section>
            <div
              class="loading z-top position-fixed w-100 h-100 start-0 end-0 bg-loder  d-flex align-items-center justify-content-center"
            >
              <span class="loader"></span>
            </div>

            <div class="container w-75 mx-auto text-white py-4 content" id="content"></div>
        </section>
    </>
  );
}
