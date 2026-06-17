import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown } from 'react-bootstrap'
import { Translations } from '../translation/Translation'
import ReactCountryFlag from "react-country-flag"
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook, FaLanguage } from 'react-icons/fa'
import { Themes } from '../theme/Themes'
import './index.css'

const NavBar = ({ language, setLanguage, theme, setTheme }) => {
  const t = Translations[language]
  const c = Themes[theme]

  const languages = [
    { code: 'pt', label: 'PT-BR', country: 'BR' },
    { code: 'en', label: 'EN', country: 'US' },
    { code: 'es', label: 'ES', country: 'ES' },
  ]

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`position-fixed w-100 ${theme === 'dark' ? 'navbar-dark-theme' : ''}`}
      style={{ fontFamily: 'Bebas Neue', backgroundColor: c.background, zIndex: 1050 }}
    >
      <Container>
        <Navbar.Brand>
          <a href="#about-me">
            <img src="./images/tiago_bela.png" style={{ width: 100 }} alt="Logo" />
          </a>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about-me" style={{ color: c.text }}>
              {t.navbar.about}
            </Nav.Link>
            <Nav.Link href="#habilities" style={{ color: c.text }}>
              {t.navbar.skills}
            </Nav.Link>
            <Nav.Link href="#formation" style={{ color: c.text }}>
              {t.navbar.education}
            </Nav.Link>
            <Nav.Link href="#projects" style={{ color: c.text }}>
              {t.navbar.projects}
            </Nav.Link>
            <Nav.Link href="#trajectory" style={{ color: c.text }}>
              {t.navbar.timeline}
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-1">
            <Nav>
              <Nav.Link href="https://www.instagram.com/tiagobela.js/"
                target="_blank"
                aria-label="Instagram"
                style={{ color: c.text }}
              >
                <FaInstagram />
              </Nav.Link>
              <Nav.Link href="https://github.com/tiago-sb"
                target="_blank"
                aria-label="GitHub"
                style={{ color: c.text }}
              >
                <FaGithub />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/tiago-bela-215103238/"
                target="_blank"
                aria-label="LinkedIn"
                style={{ color: c.text }}
              >
                <FaLinkedin />
              </Nav.Link>
              <Nav.Link href="https://www.facebook.com/profile.php?id=100018877909315"
                target="_blank"
                aria-label="Facebook"
                style={{ color: c.text }}
              >
                <FaFacebook />
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                id="language-switcher"
                align="end"
                menuVariant="light"
                title={
                  <FaLanguage size={20}
                    color={c.text} />
                }
              >
                {languages.map(({ code, label, country }) => (
                  <NavDropdown.Item
                    key={code}
                    onClick={() => setLanguage(code)}
                    active={language === code}
                    className="d-flex justify-content-between align-items-center"
                    style={{ minWidth: '130px' }}
                  >
                    <span>{label}</span>
                    <ReactCountryFlag
                      countryCode={country}
                      svg
                      style={{ width: '1.5em', height: '1.5em' }}
                    />
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown
                id="theme-switcher"
                align="end"
                title={
                  theme === 'dark'
                    ? <BsMoonFill size={18} color={c.text} />
                    : <BsSunFill size={18} color={c.text} />
                }
              >
                <NavDropdown.Item onClick={() => setTheme('light')}>
                  <BsSunFill style={{ marginRight: 8 }} />
                  {t.navbar.light}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setTheme('dark')}>
                  <BsMoonFill style={{ marginRight: 8 }} />
                  {t.navbar.dark}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar