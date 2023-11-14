import React from 'react'
import "./FlexMarcasStyle.css"

export const FlexMarcas = () => {
  return (

    <div>
      <h2 className='flexMarcasTitulo mb-5 mt-5'> Trabajamos con las mejores marcas</h2>
      <div  className="slider">
        <div  className="slide-track">
            <div  className="slide">
              <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/apc.gif"} alt="Imagen APC" height="100" width="150"/>
            </div>
            <div  className="slide">
              <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/cisco.gif"} alt="Imagen CISCO" height="100" width="150"/>
            </div>
            <div  className="slide">
              <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/dellemc.gif"} alt="Imagen DELL" height="100" width="150"/>
            </div>
            <div  className="slide">
              <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/hpe.gif"} alt="Imagen HPE" height="100" width="150"/>
            </div>
            <div  className="slide">
              <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/lenovo.gif"} alt="Imagen LENOVO" height="100" width="150"/>
            </div>
            <div  className="slide">
              <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/microsoft.gif"} alt="Imagen MICROSOFT" height="100" width="150"/>
            </div>
            <div  className="slide">
              <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/samsung.gif"} alt="Imagen SAMSUNG" height="100" width="150"  />
            </div>
            <div  className="slide">
              <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/fortinet.png"} alt="Imagen FORTINET" height="100" width="150"/>
            </div>
            <div  className="slide">
              <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/ubiquiti.gif"} alt="Imagen UBIQUITI" height="100" width="150"  />
            </div>
            <div  className="slide">
              <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/jabra2.png"} alt="Imagen JABRA" height="100" width="150"  />
            </div>
            <div  className="slide">
              <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/veam.png"} alt="Imagen VEAM" height="100" width="150"  />
            </div>
            <div  className="slide">
              <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/dell-plati.png"} alt="Imagen DELLPLATINUM" height="100" width="150"  />
            </div>
            <div  className="slide">
              <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/apc.gif"} alt="Imagen APC" height="100" width="150"/>
            </div>
            <div  className="slide">
              <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/cisco.gif"} alt="Imagen CISCO" height="100" width="150"/>
            </div>
            <div  className="slide">
              <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/dellemc.gif"} alt="Imagen DELL" height="100" width="150"/>
            </div>
            <div  className="slide">
              <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/hpe.gif"} alt="Imagen HPE" height="100" width="150"/>
            </div>

            <div  className="slide">
              <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/fortinet.png"} alt="Imagen FORTINET" height="100" width="150"/>
            </div>
        </div>
      </div>
    </div>
  )
}