import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { US, BR } from 'country-flag-icons/react/3x2'
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="position-fixed w-100" style={{ fontFamily: 'Bebas Neue', backgroundColor: '#fff', zIndex: 1050 }}>
      <Container>
        <Navbar.Brand>
          <a href="#about-me">
            <img src="./images/tiago_bela.png" style={{ width: 100 }} alt="Logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='me-auto'>
            <Nav.Link href="#about-me">Sobre Mim</Nav.Link>
            <Nav.Link href="#habilities">Habilidades</Nav.Link>
            <Nav.Link href="#formation">Formação</Nav.Link>
            <Nav.Link href="#projects">Projetos</Nav.Link>
          </Nav>
          <Nav style={{ borderRadius: 20 }}>
            <Nav.Link href="https://www.instagram.com/tiagobella.05/" target='_blank'>
              <FaInstagram />
            </Nav.Link>
            <Nav.Link href="https://github.com/tiago-sb" target='_blank'>
              <FaGithub />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/tiago-bela-215103238/" target='_blank'>
              <FaLinkedin />
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/profile.php?id=100018877909315" target='_blank'>
              <FaFacebook />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar