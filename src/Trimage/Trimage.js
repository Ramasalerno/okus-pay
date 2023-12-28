import React from 'react'
import Container from 'react-bootstrap/Container';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Trimage = () => {
    return (
        <Container>
            <div className="contenedorImagenesTexto d-flex flex-row mb-5">
                <div className="imagenes d-flex flex-column">

                    <AnimationOnScroll animateIn="animate__fadeIn">
                    <img src={"/imagenes/1_inicios.jpg"} alt="" style={{width: "100%"}}/>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeIn">
                    <img src={"/imagenes/2_vision.jpg"}  alt="" style={{width: "100%"}}/>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeIn">
                    <img src={"/imagenes/3_servicios.jpg"} alt="" style={{width: "100%"}}/>
                    </AnimationOnScroll>

                </div>
                <div className='text text-align-center d-flex flex-column justify-content-center' style={{padding: "0px 103px", width: "100%", fontSize: "20px", color:"#588CB5"}}>
                    <h1 className='mb-5'>Como alcanzamos tus objetivos?</h1>
                    <br />
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla sunt maxime repellendus, exercitationem voluptatem obcaecati deleniti aliquam voluptas dolore! In explicabo illum dicta qui nisi quam illo alias nesciunt quasi.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla sunt maxime repellendus, exercitationem voluptatem obcaecati deleniti aliquam voluptas dolore! In explicabo illum dicta qui nisi quam illo alias nesciunt quasi.
                    </p>
                    <br/>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla sunt maxime repellendus, exercitationem voluptatem obcaecati deleniti aliquam voluptas dolore! In explicabo illum dicta qui nisi quam illo alias nesciunt quasi.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla sunt maxime repellendus, exercitationem voluptatem obcaecati deleniti aliquam voluptas dolore! In explicabo illum dicta qui nisi quam illo alias nesciunt quasi.</p>
                </div>
            </div>
        </Container>
    )
}
export default Trimage