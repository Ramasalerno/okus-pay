import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./PorcentajesStyle.css"

export const Porcentajes = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn">

    <div className='ContenedorPorcentajes'>
        <img className='imgcard1' src={"/imagenes/imagenes-productos/componente1.png"} alt="Imagen banner"></img>
        <img className='imgcard2' src={"/imagenes/imagenes-productos/componente1.png"} alt="Imagen banner"></img>
        <img className='imgcard3' src={"/imagenes/imagenes-productos/componente1.png"} alt="Imagen banner"></img>
        <img className='imgcard4' src={"/imagenes/imagenes-productos/componente1.png"} alt="Imagen banner"></img>
    </div>



    </AnimationOnScroll>

  )
}