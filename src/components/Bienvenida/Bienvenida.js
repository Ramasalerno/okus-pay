import React from 'react'
import "./BienvenidaStyle.css"
import { Link } from 'react-router-dom'
import { AnimationOnScroll } from 'react-animation-on-scroll';


export const Bienvenida = () => {
  return (
    <div className='titulosPrincipales mt-5'>
    <AnimationOnScroll animateIn="animate__bounceInUp">
        <h1 className='titulo'>Explora la innovación de Okus-Pay y contáctanos para más detalles</h1>
            <div>
                <Link to="/contacto" className='buttonHomeP'>
                    <span>Contactenos!</span>
                </Link>
            </div>
    </AnimationOnScroll>
    </div>

)
}
