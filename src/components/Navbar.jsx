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
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
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