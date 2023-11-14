import React from "react";
import "./flexFeatures.css"

export default function FlexFeatures() {
  return (
    <>
      <section>
        <div className="bgRari">
          <div className="container">
            <header className="center btm-spacer">
              <h2 className="mb-5 mt-5">Obtene todos estos beneficios!</h2>
            </header>
            <div className="row spacer">
              <div className="col-md-4">
                <div className="center">
                  <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-circle fa-stack-2x circulo fa-beat-fade"></i>
                    <i className="fa-solid fa-flag fa-stack-1x fa-inverse dentroCirculo "></i>
                  </span>
                  <h3 className="h3-3col mt-4">Servidores Dedicados en Argentina</h3>
                  <p className="p-3col">
                  Soporte y conectividad local.
                  </p>
                </div>
                {/*<!-- center --> */}
              </div>
              {/*<!-- col-md-4 -->*/}
              <div className="col-md-4">
                <div className="center">
                  <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-circle fa-stack-2x circulo fa-beat-fade"></i>
                    <i className="fa-solid fa-rocket fa-stack-1x fa-inverse dentroCirculo"></i>
                  </span>
                  <h3 className="h3-3col mt-4">Discos SAS</h3>
                  <p className="p-3col">
                  Podrás elegir entre discos de estado sólido y HDD según tus objetivos.
                  </p>
                </div>
                {/*<!-- center --> */}
              </div>
              {/*<!-- col-md-4 -->*/}
              <div className="col-md-4">
                <div className="center">
                  <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-circle fa-stack-2x circulo fa-beat-fade"></i>
                    <i className="fa-solid fa-shield fa-stack-1x fa-inverse dentroCirculo"></i>
                  </span>
                  <h3 className="h3-3col mt-4">Seguro y confiable</h3>
                  <p className="p-3col">
                  Máxima seguridad, uptime 99,9% de red y protección contra amenazas.
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
                  <h3 className="h3-3col mt-4">Soporte primer nivel</h3>
                  <p className="p-3col">
                  Contáctanos por email, ticket o teléfono. Siempre estaremos para vos.
                  </p>
                </div>
                {/*<!-- center --> */}
              </div>
              {/*<!-- col-md-4 -->*/}
              <div className="col-md-4">
                <div className="center">
                  <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-circle fa-stack-2x circulo fa-beat-fade"></i>
                    <i className="fa-solid fa-exclamation fa-stack-1x fa-inverse dentroCirculo"></i>
                  </span>
                  <h3 className="h3-3col mt-4">Garantía de hardware</h3>
                  <p className="p-3col">
                    Trabajamos con marcas de primer nivel, garantizando el optimo funcionamiento.
                  </p>
                </div>
                {/*<!-- center --> */}
              </div>
              {/*<!-- col-md-4 -->*/}
              <div className="col-md-4">
                <div className="center">
                  <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-circle fa-stack-2x circulo fa-beat-fade"></i>
                    <i className="fa-solid fa-code fa-stack-1x fa-inverse dentroCirculo"></i>
                  </span>
                  <h3 className="h3-3col mt-4">Acceso administrador</h3>
                  <p className="p-3col">
                  Te damos acceso root o administrador para que tengas todo el control.
                  </p>
                </div>
                </div>
              </div>
          
            <div className="row spacer">
              <div className="col-md-4">
                <div className="center">
                  <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-circle fa-stack-2x circulo fa-beat-fade"></i>
                    <i className="fa-solid fa-money-bill fa-stack-1x fa-inverse dentroCirculo"></i>
                  </span>
                  <h3 className="h3-3col mt-4">Ahorra dinero</h3>
                  <p className="p-3col">
                  Olvídate de comprar equipamiento y paga un único abono fijo mensual.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="center">
                  <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-circle fa-stack-2x circulo fa-beat-fade"></i>
                    <i className="fa-solid fa-trophy fa-stack-1x fa-inverse dentroCirculo"></i>
                  </span>
                  <h3 className="h3-3col mt-4">Lideres en el mercado</h3>
                  <p className="p-3col">
                    Somos lideres en el mercado desde 1999, podes confiar en nosotros y nuestro equipo!
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="center">
                  <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-circle fa-stack-2x circulo fa-beat-fade"></i>
                    <i className="fa-solid fa-chart-simple fa-stack-1x fa-inverse dentroCirculo"></i>
                  </span>
                  <h3 className="h3-3col mt-4">Estado del Servicio</h3>
                  <p className="p-3col">
                  Cuentas con un panel web para conocer el estado de tus servicios en tiempo real.
                  </p>
                </div>
              </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
