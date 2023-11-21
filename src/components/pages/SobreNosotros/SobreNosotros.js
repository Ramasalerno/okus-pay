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
                  <h2 className='tituloSobreNosotros'>
                    Venimos a revolucionar <br />
                    la industria de los metodos de pago
                  </h2>
                </div>
                </AnimationOnScroll>

                <div className="text">
                  <p>
                  <b className='boldSobreNosotros'>Okus-Pay</b> revoluciona la forma en que experimentamos los pagos al ofrecer una solución única: pagos biométricos sin necesidad de celulares, internet, efectivo o tarjetas de crédito. Es la respuesta completa para comercios y distribuidores, proporcionando servicios de terminal de pago y cobranzas que marcan la diferencia en la industria.
                  </p>

                  <h4 className='tituloSobreNosotros'>Características Clave de Okus-Pay:</h4>
                  <p>
                  <b className='boldSobreNosotros'>Validación con SID</b>: Okus-Pay garantiza la seguridad y la precisión al validar la información a través del sistema SID, ofreciendo una capa adicional de protección.
                  </p>
                  <p>
                  <b className='boldSobreNosotros'>Accesibilidad y Facilidad:</b> La tecnología biométrica con la palma de la mano hace que los pagos sean accesibles, seguros y fáciles, proporcionando una experiencia sin igual.
                  </p>

                  <h4 className='tituloSobreNosotros'>Beneficios para Comercios y Distribuidores:</h4>
                  <p>
                  <b className='boldSobreNosotros'>Comercios de Cara al Público:</b> Obtén terminales de pago que transforman la experiencia del cliente y simplifican los procesos de cobro.
                  </p>
                  <p>
                  <b className='boldSobreNosotros'>Distribuidores:</b> Participa en la revolución de pagos biométricos vendiendo terminales innovadores que están cambiando la forma en que pagamos.
                  </p>

                  <h4 className='tituloSobreNosotros'>Consultoría y Capacitación Privada:</h4>
                  <p><b className='boldSobreNosotros'>Okus-Pay</b> no solo ofrece tecnología de vanguardia, sino también servicios de consultoría y capacitación privada dirigidos por nuestro CEO, <b className='boldSobreNosotros'>Martin Anusic</b>, para garantizar que aproveches al máximo nuestra plataforma.</p>


                </div>
                <h5><b>Nuestros servicios</b></h5>
                <ul className="list-style-one">
                  <li>Consultoría en pagos Biométricos</li>
                  <li>Beneficios para comercios y distribuidores</li>
                  <li>Terminal de pago Biométrico</li>
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
