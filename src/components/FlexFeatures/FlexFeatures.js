import React from "react";
import "./flexFeatures.css"
import { Link } from 'react-router-dom'
import { Container } from "react-bootstrap";

export default function FlexFeatures() {
  return (
    <>
      <section>
        <Container>
          <div className="bgRari">
            <div className="container">
              <header className="center btm-spacer">
                <h2 className="mb-5 mt-5 text-light">¡Descubre la <span style={{color:"#b249f8"}}>Revolución de Pago</span> con Okus-Pay!</h2>
              </header>
              <div className="row spacer">
                <div className="col-md-4">
                  <div className="center">
                    <span className="fa-stack fa-2x">
                      <i className="fa-solid fa-circle fa-stack-2x circulo fa-beat-fade"></i>
                      <i className="fa-solid fa-flag fa-stack-1x  dentroCirculo "></i>
                    </span>
                    <h3 className="h3-3col mt-4">Tecnología Biométrica Avanzada</h3>
                    <p className="p-3col">
                    Descubre la revolucionaria tecnología biométrica de Okus-Pay, una experiencia de pago de último nivel y máxima seguridad.
                    </p>
                  </div>
                  {/*<!-- center --> */}
                </div>
                {/*<!-- col-md-4 -->*/}
                <div className="col-md-4">
                  <div className="center">
                    <span className="fa-stack fa-2x">
                      <i className="fa-solid fa-circle fa-stack-2x circulo fa-beat-fade"></i>
                      <i className="fa-solid fa-shield fa-stack-1x  dentroCirculo"></i>
                    </span>
                    <h3 className="h3-3col mt-4">Seguridad sin Compromisos</h3>
                    <p className="p-3col">
                    A través de nuestra API de última generación, tus datos se almacenan de forma segura en una base de datos conectada a la nube. Realizamos una validación exhaustiva mediante el sistema SID.
                    </p>
                  </div>
                  {/*<!-- center --> */}
                </div>
                {/*<!-- col-md-4 -->*/}
                <div className="col-md-4">
                  <div className="center">
                    <span className="fa-stack fa-2x">
                      <i className="fa-solid fa-circle fa-stack-2x circulo fa-beat-fade"></i>
                      <i className="fa-solid fa-rocket fa-stack-1x  dentroCirculo"></i>
                    </span>
                    <h3 className="h3-3col mt-4">Libertad Total de Pago</h3>
                    <p className="p-3col">
                    Con OkusPay, los usuarios pueden salir sin preocuparse por el teléfono o la billetera. Olvídate de depender de la batería del teléfono o la conexión a internet.
                    </p>
                  </div>
                  {/*<!-- center --> */}
                </div>
                {/*<!-- col-md-4 -->*/}
              </div>
              {/* <!-- row --> */}
              <div className="row spacer">
                <div className="col-md-4">
                  <div className="center">
                    <span className="fa-stack fa-2x">
                      <i className="fa-solid fa-circle fa-stack-2x circulo fa-beat-fade"></i>
                      <i className="fa-solid fa-kit-medical fa-stack-1x  dentroCirculo"></i>
                    </span>
                    <h3 className="h3-3col mt-4">Soporte Inmediato y Personalizado</h3>
                    <p className="p-3col">
                    En OkusPay, nos enorgullece ofrecer un soporte excepcional. Contáctanos a través de nuestro soporte web, WhatsApp o línea telefónica.
                    </p>
                  </div>
                  {/*<!-- center --> */}
                </div>
                {/*<!-- col-md-4 -->*/}
                <div className="col-md-4">
                  <div className="center">
                    <span className="fa-stack fa-2x">
                      <i className="fa-solid fa-circle fa-stack-2x circulo fa-beat-fade"></i>
                      <i className="fa-solid fa-exclamation fa-stack-1x  dentroCirculo"></i>
                    </span>
                    <h3 className="h3-3col mt-4">Innovando desde el 2023</h3>
                    <p className="p-3col">
                    OkusPay ha tomado vuelo en el mundo de las fintech desde el 2023, sirviendo a las principales empresas del sector.
                    </p>
                  </div>
                  {/*<!-- center --> */}
                </div>
                {/*<!-- col-md-4 -->*/}
                <div className="col-md-4">
                  <div className="center">
                    <span className="fa-stack fa-2x">
                      <i className="fa-solid fa-circle fa-stack-2x circulo fa-beat-fade"></i>
                      <i className="fa-solid fa-money-bill fa-stack-1x  dentroCirculo"></i>
                    </span>
                    <h3 className="h3-3col mt-4">Libertad en la palma de tu mano</h3>
                    <p className="p-3col">
                    OkusPay va más allá de los límites convencionales. La libertad financiera está literalmente en la palma de tu mano.
                    </p>
                  </div>
                  </div>
                </div>
          
                <div>
                  <Link to="/contacto" className='buttonHomeP mb-5'>
                      <span>Contactenos!</span>
                  </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
    </>
  );
}
