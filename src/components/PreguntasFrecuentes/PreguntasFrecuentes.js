import React from 'react'
import "./PreguntasFrecuentesStyle.css"

export const PreguntasFrecuentes = () => {
  return (
    <div className='flexPreguntas'>
        <div className='contenedor-imagen'>
            <img src={process.env.PUBLIC_URL + "/imagenes/banner/preg_frec.webp"} alt="Imagen marcas" className='imagenesBody' loading='lazy'></img>
            <h2 className='flexPreguntasTitulo' animateIn="animate__bounceInUp">Preguntas frecuentes</h2>
        </div>
                        <div className='pregFrec mt-5'>

                            <div className='pregFrecInterno'>
                                <p type="button" data-bs-toggle="collapse" data-bs-target="#preguntasFrec" aria-expanded="false" aria-controls="collapseExample">
                                <p className='imagenFont3'><span className='textFrec'>Pregunta 1</span></p>
                                
                                </p>
                                    <div className="collapse colapsados" id="preguntasFrec">
                                        <ul>
                                            <p><b>Ejemplo:</b> Ejemplo.</p>
                                            <p><b>Ejemplo:</b> Ejemplo</p>
                                            <p><b>Ejemplo:</b> Ejemplo</p>
                                            <p><b>Ejemplo:</b> Ejemplo</p>
                                        </ul>
                                    </div>
                            </div>
                                                        
                            <div className='pregFrec'>
                                <p type="button" data-bs-toggle="collapse" data-bs-target="#soporte" aria-expanded="false" aria-controls="collapseExample">
                                <p className='imagenFont3'><span className='textFrec'>Pregunta 2</span></p>
                                
                                </p>
                                    <div className="collapse colapsados" id="soporte">
                                        <ul>
                                            <h5>Ejemplo</h5>
                                            <p>Ejemplo</p>
                                            <h5>Ejemplo</h5>
                                            <p>Ejemplo</p>
                                        </ul>
                                    </div>
                            </div>
                                
                            <div className='pregFrec'>
                                <p type="button" data-bs-toggle="collapse" data-bs-target="#pop3" aria-expanded="false" aria-controls="collapseExample">
                                <p className='imagenFont3'><span className='textFrec'>Pregunta 3</span></p>
                                
                                </p>
                                    <div className="collapse colapsados" id="pop3">
                                        <h5 className='tituloPop3 mb-3'>Ejemplo</h5>
                                        <p>Ejemplo</p>
                                    </div>
                            </div>
                        </div>

                        
    </div>
  )
}
