import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

function NavbarTech() {

    // let itemsNav = ['Contact', 'Services', 'Info', 'About us'];

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#equalTech">equalTech</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">INICIO</Nav.Link>
            <Nav.Link href="#conocenos">CONOCENOS</Nav.Link>
            <Nav.Link href="#servicios">SERVICIOS</Nav.Link>
            <Nav.Link href="#contacto">CONTACTO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

/* O ESTO: (O QUITAMOS LA ETIQUETA NAV Y SOLO LO DE DENTRO) 
<nav>
{/* <ul>
    <li>Contacto</li>
    <li>Servicios</li>
    <li>Info</li>
    <li>Home</li>
    <li>Search</li>
</ul> 

{itemsNav.map(element => {
    return <li>{element}</li> 
})}

<h1 className='title'>Helloooo</h1>
<img src="" alt="" /> 
</nav> */

);
}

export default NavbarTech;