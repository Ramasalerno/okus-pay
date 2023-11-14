import React from 'react'
import "./BannerBodySoporteStyle.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';


export const BannerBodySoporte = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn">
    <div>
      <div className='mb-5 mt-3 contenedorBanner'>
        <img src={"/imagenes/banner/bannerBody2.jpg"} alt="Imagen banner"></img>
      </div>
    </div>
    </AnimationOnScroll>
  )
}