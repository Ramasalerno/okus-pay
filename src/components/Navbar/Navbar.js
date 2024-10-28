import React, { Component } from 'react';
import {Navbar, Nav , Container} from 'react-bootstrap'
import './Navbar.css'
import { Link } from 'react-router-dom'


export default class Barra1 extends Component {

  render() {
    return <div>

      <Navbar expand="lg" className='barra'>
          <Container fluid>

              <Navbar.Brand href="/">
                <Link to="/">
                <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-logo/logo-okuspay.png"} alt="Logo Okus-Pay" className='setLogo'></img>
                </Link>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" className='colt'>
                <Nav className="me-auto my-2 my-lg-0"style={{ height: '100%' }}>
                <Link to="/" className='linkeado'>Home</Link>
                <a href="#empresas" className='linkeado'>Empresas</a>
                <Link to="/nosotros" className='linkeado'>Nosotros</Link>
                <a href="https://okuspay.netlify.app/" className='linkeado'>Simulacion</a>
                <Link to="/contacto" className='linkeado'>Contacto</Link>
                </Nav>
              </Navbar.Collapse>
          </Container>
</Navbar>
    </div>;
  }
}


