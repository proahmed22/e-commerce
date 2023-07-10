import React from 'react'
import style from './Slider.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function MySlider() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return <>
  <div>
        <Slider {...settings}>
          <div>
            <img className='w-100' style={{'height' : '350px'}}   src={require('../../images/im1.jpg')} alt="" />
        </div>
          <div>
            <img className='w-100' style={{'height' : '350px'}} src={require('../../images/2.png')} alt="" />
        </div>
          <div>
            <img className='w-100' style={{'height' : '350px'}} src={require('../../images/5.jpg')} alt="" />
        </div>
          <div>
            <img className='w-100' style={{'height' : '350px'}} src={require('../../images/6.jpg')} alt="" />
        </div>
          <div>
            <img className='w-100' style={{'height' : '350px'}} src={require('../../images/m4.webp')} alt="" />
        </div>
      
        </Slider>
      </div>
  </>
}
