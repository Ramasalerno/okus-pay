import React from 'react'
import Container from 'react-bootstrap/Container';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./trimageStyle.css"


const Trimage = () => {
    return (
        <Container className='oculTrimage'>
            <div className="contenedorImagenesTexto d-flex flex-row mb-5">
                <div className="imagenes d-flex flex-column">

                    <AnimationOnScroll animateIn="animate__fadeIn">
                    <img src={"/imagenes/manoPay.jpg"} alt="" style={{width: "100%"}}/>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeIn">
                    <img src={"/imagenes/2_vision.jpg"}  alt="" style={{width: "100%"}}/>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeIn">
                    <img src={"/imagenes/manoPago.jpg"} alt="" style={{width: "100%"}}/>
                    </AnimationOnScroll>

                </div>
                <div className='text text-align-center d-flex flex-column justify-content-center' style={{padding: "0px 103px", width: "100%", fontSize: "20px", color:"#588CB5"}}>
                    <h1 className='mb-5'>Como alcanzamos tus objetivos?</h1>
                    <br />
                    <p>
                    Imagina un mundo donde tu identidad sea la llave de todo. Un mundo donde un simple gesto de la mano desbloquee un universo de posibilidades. Okuspay te lleva a este futuro, transformando tu palma en un pasaporte digital único e inconfundible. Con nuestra tecnología biométrica de vanguardia, decir adiós a las billeteras abultadas y contraseñas complejas es más sencillo que nunca. Cada transacción se convierte en una experiencia fluida y segura, gracias a la biometría de la palma.
                    </p>
                    <br/>
                    <p>Seguridad, velocidad y comodidad son los pilares sobre los que se construye Okuspay. Tu palma es tu firma digital, una huella única que solo tú posees. Con Okuspay, puedes pagar de forma instantánea y segura dondequiera que estés, sin preocuparte por fraudes o pérdidas.</p>
                    <br/>
                    <p>Únete a la revolución de los pagos biométricos. Elige Okuspay y descubre una nueva forma de vivir la tecnología.
                    </p>
                </div>
            </div>
        </Container>
    )
}
export default Trimage