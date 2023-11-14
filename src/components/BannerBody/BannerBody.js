import React from 'react'
import "./BannerBodyStyle.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const BannerBody = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn">
    <div>
      <div className='mb-5 mt-3 contenedorBanner'>
        <img src={"/imagenes/banner/bannerBody1.jpg"} alt="Imagen banner"></img>
      </div>
    </div>
    </AnimationOnScroll>
    
  )
}
