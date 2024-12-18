import React from 'react'
import "./InfoHomeStyle.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';


export const InfoHome = () => {
    return (
        <>

            <section id="caracteristicas" className="caracteristicas"><div className="width_wrap">

                <div className="titulo text-light" style={{textAlign:"left", width:"75%"}} id='empresas'> El respaldo de la infraestructura  <span style={{color:"#b249f8"}}>más poderosa</span></div>

                <AnimationOnScroll animateIn="animate__fadeInRight">
                    <div className="fila-carac" >
                        <div className="imagen"><img src={"/imagenes/servicios/sliderImgEntr.jpg"} className="exclusivo" alt="" />
                        </div>

                        <div className="texto text-light" >
                            <h3 className="subtitulo" >Pensado para tu negocio</h3>
                            <p className="parrafo">Con el plan OkusPay, aseguras un servidor dedicado exclusivamente para tu plataforma de cobros. Garantizamos una conexión óptima para impulsar el éxito de tu empresa. La infraestructura robusta de Okus-Pay está diseñada para respaldar la dinámica del negocio y brindar una experiencia informática sin igual. ¡Confía en Okus-Pay para llevar tus cobros al siguiente nivel!</p>
                        </div>
                    </div>
                </AnimationOnScroll>


                <AnimationOnScroll animateIn="animate__fadeInLeft">

                    <div className="fila-carac column-reverse">
                        <div className="texto text-light">
                            <h3 className="subtitulo">Actualización y seguridad</h3>
                            <p className="parrafo">En OkusPay, nuestro servicio abarca la actualización y aplicación de parches. Nos comprometemos a brindarte la máxima seguridad y rendimiento que tu negocio requiere. Con Okus-Pay, tu plataforma estará siempre al día, fortalecida contra amenazas y optimizada para un rendimiento excepcional. ¡Confía en nosotros para mantener tu operación siempre segura y en su mejor forma!
                            </p>
                        </div>
                        <div className="imagen"><img src={"/imagenes/servicios/sliderImgEntr.jpg"} className="escudo" alt="" />
                        </div>
                    </div>
                </AnimationOnScroll>

            </div>
            </section>
        </>
    )
}
