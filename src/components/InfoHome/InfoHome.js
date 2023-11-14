import React from 'react'
import "./InfoHomeStyle.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';


export const InfoHome = () => {
return (
    <>
    
    <section id="caracteristicas" className="caracteristicas"><div className="width_wrap">
        
    <div className="titulo">El respaldo de la infraestructura más poderosa</div>
    
    <AnimationOnScroll animateIn="animate__fadeInRight">
    <div className="fila-carac">
        <div className="imagen"><img src={"/imagenes/servicios/vector1.svg"} className="exclusivo" alt=""/>
        </div>

        <div className="texto">
        <h3 className="subtitulo">Pensado para tu proyecto</h3>
        <p className="parrafo">Con nuestro plan, obtendrás un servidor dedicado sólo para tu proyecto. No compartirás hardware con nadie más, por lo que podemos garantizar una conexión optima para tu empresa.</p>
        </div>
    </div>
    </AnimationOnScroll>


    <AnimationOnScroll animateIn="animate__fadeInLeft">

    <div className="fila-carac column-reverse">
        <div className="texto">
            <h3 className="subtitulo">Actualización y seguridad</h3>
            <p className="parrafo">El servicio incluye la actualización y aplicación de parches sobre el software pre-instalado en tu servidor, brindándole toda la seguridad y performance que tu negocio online necesita.
            </p>
        </div>
        <div className="imagen"><img src={"/imagenes/servicios/vector1.svg"} className="escudo" alt=""/>
        </div>
    </div>
    </AnimationOnScroll>

    </div>
    </section>
    </>
)
}
