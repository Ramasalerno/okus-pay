import React from 'react'
import "./BienvenidaStyle.css"
import { Link } from 'react-router-dom'
import { AnimationOnScroll } from 'react-animation-on-scroll';


export const PreguntasFrecBoton = () => {
  return (
    <div className='titulosPrincipales mt-1 mb-5'>
    <AnimationOnScroll animateIn="animate__backInDown">
        <h1 className='titulo'>Preguntas frecuentes</h1>
            <div>
                <Link to="/preguntas_frecuentes" className='buttonHomeP'>
                    <span>Click aqui!</span>
                </Link>
            </div>
    </AnimationOnScroll>
    </div>
  )
}
