import React from 'react'
import "./ServiciosCardStyle.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';

export const ServiciosCard = () => {
  return (
    <div className='cardsNoMobile'>
    <h2 className='flexMarcasTitulo mt-3'> Nuestros servicios</h2>
    <AnimationOnScroll animateIn="animate__fadeIn">
        <div className='container' id='servicios'>
            <div className='card'>
                <div className='content'>
                    <img src={"/imagenes/servicios/servicios-consultoria.jpg"} alt='img consultoria'/>
                    <div className='letrasCards'>
                        <h3>Consultoría</h3>
                        <button className="learn-more mt-4">
                            <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                            </span>
                            {/* <span className="button-text">Mas info</span> */}
                            <Link to="/consultoria" className="button-text" >Mas info!</Link>

                        </button>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='content'>
                    <img src={"/imagenes/servicios/servicios-hosting.jpg"} alt='img hosting'/>
                    <div className='letrasCards'>
                        <h3>Hosting</h3>
                        <button className="learn-more mt-4">
                            <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                            </span>
                            <Link to="/hosting" className="button-text" >Mas info!</Link>
                        </button>
                    </div>
                </div>
            </div>

            <div className='card'>
                    <div className='content'>
                        <img src={"/imagenes/servicios/fortinet.png"} alt='img promociones'/>
                        <div className='letrasCards'>
                            <h3>Fortinet</h3>
                            <button className="learn-more mt-4">
                                <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                                </span>
                                <Link to="/fortinet" className="button-text" >Mas info!</Link>
                            </button>
                        </div>
                    </div>
                </div>

            
        </div>
    </AnimationOnScroll>

    <AnimationOnScroll animateIn="animate__fadeIn">
    <div className='container'>
        <div className='card'>
                    <div className='content'>
                        <img src={"/imagenes/servicios/redes.png"} alt='img soporte'/>
                        <div className='letrasCards'>
                            <h3>Redes informaticas y cableado</h3>
                            <button className="learn-more mt-2">
                                <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                                </span>
                                <Link to="/redes" className="button-text" >Mas info!</Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='content'>
                        <img src={"/imagenes/servicios/servicios-virtualizacion.jpg"} alt='img virtualizacion'/>
                        <div className='letrasCards'>
                            <h3>Virtualización de Servidores</h3>
                            <button className="learn-more mt-2">
                                <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                                </span>
                                <Link to="/virtualizacionServidores" className="button-text" >Mas info!</Link>

                            </button>
                        </div>
                    </div>
                </div>

                <div className='card'>
                <div className='content'>
                    <img src={"/imagenes/servicios/servicios-servidores.jpg"} alt='img servidores'/>
                    <div className='letrasCards'>
                        <h3>Servidores Dedicados</h3>
                        <button className="learn-more mt-2">
                            <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                            </span>
                            <Link to="/servidoresDedicados" className="button-text" >Mas info!</Link>

                        </button>
                    </div>
                </div>
            </div>

                
    </div>
    </AnimationOnScroll>

    </div>
)
}
