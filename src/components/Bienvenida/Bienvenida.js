import React from 'react'
import "./BienvenidaStyle.css"
import { Link } from 'react-router-dom'


export const Bienvenida = () => {
  return (
    <div className='titulosPrincipales mt-5'>
        <h1 className='titulo'>Explora la innovación de OkusPay y contáctanos para más detalles</h1>
            <div>
                <Link to="/contacto" className='buttonHomeP'>
                    <span>Contactenos!</span>
                </Link>
            </div>
    </div>

)
}
