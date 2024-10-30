import React from 'react'
import "./BannerBodySoporteStyle.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';


export const BannerBodySoporte = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn">
    <div>
      <div className='mb-5 mt-3 contenedorBanner'>
        <img src={"/imagenes/banner/bannerBody2.jpg"} alt="Imagen banner"></img>
        <Container><div>
                <Link to="/contacto" className='buttonHomeP'>
                    <span>Contactenos!</span>
                </Link>
            </div></Container>
      </div>
            
    </div>
    </AnimationOnScroll>
  )
}