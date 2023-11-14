import React from 'react'
import "./Contactostyle.css"
import Swal from 'sweetalert2/dist/sweetalert2.js'

export const Contacto = () => {

    const handleSubmit = () => {
        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado con exito!',
            text: 'Muchas gracias por su mensaje, nos contactaremos a la brevedad!',
        }).then(function() {
            window.location = "/";
        });
    }
    

return (
    <>
    <section className="contact" id="contact">
        <div className="container">
            <div className="heading text-center">
                <h2>Coordina una reunión</h2>
                <p>Si tiene alguna pregunta, o desea reunirse con nuestro staff, no dude en ponerse en contacto con nosotros, nos comunicaremos a la brevedad!
                    <br/>Complete sus datos en el formulario de contacto.</p>
            </div>
            <div className="row">
                <div className="col-md-5 centrarTextos">
                    <div className="title">
                        <h3>Detalles de contacto</h3>
                        <p>Buenos Aires - Argentina </p>
                    </div>

                    <div className="content">
                        <div className='contenedorContent'>
                            <div className="info">
                                <i className="fas fa-mobile-alt"></i>
                                <h4 className="d-inline-block">Telefono :
                                    <br/>
                                    <span>+54(011)6666666666</span></h4>
                            </div>
                            <div className="info">
                                <i className="far fa-envelope"></i>
                                <h4 className="d-inline-block">Email :
                                    <br/>
                                    <span>info@okus-pay.com.ar</span></h4>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-md-7">

                    <form action={"https://dvg-mails.herokuapp.com/api/contacto"} method="POST" onSubmit={handleSubmit} >
                        <div className="row ">
                            <div className="col-sm-6 nameEmail ">
                                <input type="text" className="form-control" name='Nombre' placeholder="Nombre" required/>
                            </div>
                            <div className="col-sm-6 nameEmail">
                                <input type="email" className="form-control" name='Email' placeholder="Email" required/>
                            </div>
                            <div className="col-sm-12">
                                <input type="number" className="form-control" name='Telefono' placeholder="Telefono" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" rows="5" id="comment" name='Mensaje' placeholder="Mensaje" required></textarea>
                        </div>
                        <button className="btn btn-block" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>

)
}
