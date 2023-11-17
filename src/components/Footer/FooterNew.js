import React from 'react'
import "./FooterNewStyle.css"
import { Link } from 'react-router-dom'


export const FooterNew = () => {
  return (
    <footer className="footer pt-5">
        <div className="container bottom_border">

            <div className="row rowFooter">

            <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                        <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-logo/logo-okuspay.png"} alt="Logo OkusPay" className='logoFooterNew'></img> 
                    </div>
                <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                    <h5 className="headin5_amrc col_white_amrc pt2">Contactanos</h5>
                    <p><i className="fa fa-location-arrow"></i> Buenos Aires - Argentina </p>
                    <p><i className="fa fa-phone"></i>  +54(011)6841-3870 </p>
                    <p><i className="fa fa fa-envelope"></i> <a href="mailto:info@okus-pay.com.ar" className='mailFooter'>info@okus-pay.com.ar</a></p>
                </div>
                

            {/* <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Servicios</h5>
                <ul className="footer_ul_amrc">
                <li><Link to="/consultoria">Consultoría</Link></li>
                <li><Link to="/hosting">Hosting</Link></li>
                <li><Link to="/fortinet">Fortinet</Link></li>
                <li><Link to="/redes">Redes y Cableado</Link></li>
                <li><Link to="/virtualizacionServidores">Virtualizacion de Servidores</Link></li>
                <li><Link to="/servidoresDedicados">Servidores Dedicados</Link></li>
                </ul>
            </div> */}
            


            <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Sobre Nosotros</h5>
                <ul className="footer_ul_amrc">
                <li><Link to="contacto">Contacto</Link></li>
                <li><Link to="nosotros">Nosotros</Link></li>
                <li><Link to="/">Home</Link></li>
                </ul>
            </div>


                

            </div>
            </div>
    </footer>
  )
}
