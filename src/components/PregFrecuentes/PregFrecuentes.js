import React from 'react'
import { AcordionFAQ } from '../AcordionFAQ/AcordionFAQ'
import "./PregFrecuentesStyle.css"

export const PregFrecuentes = () => {
  return (
    <div>
        <div className='contenedor-imagen'>
                <img src={process.env.PUBLIC_URL + "/imagenes/banner/preg_frec.webp"} alt="Imagen marcas" className='imagenesBody' loading='lazy'></img>
                <h2 className='flexPreguntasTitulo' animateIn="animate__bounceInUp">Preguntas frecuentes</h2>
        </div>

        <div className='divFaq mt-5'>
        <h4>Clientes</h4>
            <AcordionFAQ/>
<hr/>
            <h4>Empresas</h4>
            <AcordionFAQ/>
        </div>
    </div>
  )
}
