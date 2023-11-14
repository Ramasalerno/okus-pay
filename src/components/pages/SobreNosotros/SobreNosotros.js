import React from 'react'
import "./SobreNosotrosStyle.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom'

export const SobreNosotros = () => {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">

                <AnimationOnScroll animateIn="animate__backInUp">
                <div className="sec-title">
                  <span className="title">Sobre Nosotros!</span>
                  <h2>
                    Venimos a revolucionar <br />
                    la industria de los metodos de pago
                  </h2>
                </div>
                </AnimationOnScroll>

                <div className="text">
                  <p>
                    La propuesta de <b>Okus-Pay</b> reúne los servicios de consultoría e implementación en virtualización de servidores y Hosting para Email y Sitios Web.
                  </p>

                  <p>
                  Ayudamos a empresas en crecimiento con la necesidad de contar con la infraestructura suficiente para soportar el aumento de información, asegurar la continuidad operativa y, al mismo tiempo, facilitar la administración de los sistemas informáticos.
                  </p>

                  <p>
                  Una propuesta de servicio flexible y seguro, que permite adaptarse a los requerimientos de cada compañía; con equipamiento de última generación para sostener la dinámica del negocio y contribuir al uso eficiente de los recursos
                  </p>

                  <p>
                  Experiencia en la implementación y mantenimiento de tecnologías líderes. Servicio soportado por servidores y equipamiento de alta disponibilidad.
                  </p>
                </div>
                <h5><b>Nuestros servicios</b></h5>
                <ul className="list-style-one">
                  <Link to="/consultoria"><li>Consultoría</li></Link>
                  <Link to="/hosting"><li>Hosting</li></Link>
                  <Link to="/servidoresDedicados"><li>Servidores dedicados</li></Link>
                  <Link to="/soporteCorporativo"><li>Soporte corporativo</li></Link>
                  <Link to="/virtualizacionServidores"><li>Virtualizacion de servidores</li></Link>
                </ul>

                <div className="btn-box">
                  <a href="/contacto" className="theme-btn btn-style-one">
                    Contacto!
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Image Column --> */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <figure className="image-1">
                  <a href="/" className="lightbox-image" data-fancybox="images">
                    <img
                      src={"/imagenes/servicios/proyectoNuevo.png"}
                      alt=""
                    />
                  </a>
                </figure>
                <figure className="image-2">
                  <a href="/" className="lightbox-image" data-fancybox="images">
                    <img
                        src={"/imagenes/servicios/corporativos.png"}
                      alt=""
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
