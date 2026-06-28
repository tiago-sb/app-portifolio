import ListGroup from 'react-bootstrap/ListGroup'
import { Container, Row, Col, Figure, Button, Modal } from 'react-bootstrap'
import { useState, useRef } from 'react'
import { useInView } from "framer-motion"
import {
  RiEmotionLine, RiFileWarningLine, RiShieldUserLine, RiSpeakLine,
  RiTeamLine, RiEmotionHappyLine, RiLightbulbLine, RiTimeLine
} from 'react-icons/ri'
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { Translations } from '../translation/Translation'
import { Themes } from '../theme/Themes'

const About = ({ language, theme }) => {
  const [show, setShow] = useState(false)
  const t = Translations[language]
  const c = Themes[theme]

  const ref = useRef(null)

  const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  }

  const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  }

  const contacts = [
    { icon: <FaInstagram />,    href: "https://www.instagram.com/tiagobela.js/", label: "Instagram" },
    { icon: <FaLinkedin />,     href: "https://www.linkedin.com/in/tiago-bela-215103238/", label: "LinkedIn" },
    { icon: <MdOutlineEmail />, href: "https://criarmeulink.com.br/u/1690329618", label: "Email" },
    { icon: <FaDiscord />,      href: "https://discord.com/login?redirect_to=%2Fchannels%2F%40me%2F964609060173389864", label: "Discord" },
    { icon: <FaFacebook />,     href: "https://www.facebook.com/profile.php?id=100018877909315", label: "Facebook" },
    { icon: <FaWhatsapp />,     href: "https://wa.link/c70ad6", label: "WhatsApp" },
  ]

  const skills = [
    { icon: <RiSpeakLine />,        label: t.skills.communication },
    { icon: <RiEmotionHappyLine />, label: t.skills.empathy },
    { icon: <RiTeamLine />,         label: t.skills.teamwork },
    { icon: <RiLightbulbLine />,    label: t.skills.criticalThinking },
    { icon: <RiTimeLine />,         label: t.skills.timeManagement },
    { icon: <RiShieldUserLine />,   label: t.skills.adaptability },
    { icon: <RiFileWarningLine />,  label: t.skills.problemSolving },
    { icon: <RiEmotionLine />,      label: t.skills.emotionalIntelligence },
  ]

  return (
    <>
      <section style={{ width: '100vw', paddingTop: 50, paddingBottom: 50, backgroundColor: c.background }}>
        <h1
          id="about-me"
          style={{
            color: c.text,
            fontFamily: 'Bebas Neue',
            fontSize: 60,
            textAlign: 'center',
            paddingTop: 60,
            paddingBottom: 60
          }}
        >
          {t.about.title}
        </h1>

        <Container ref={ref}>
          <Row>
            <Col>
              <Figure>
                <Figure.Image
                  alt="foto tiago bela"
                  src="./images/foto_minha.png"
                  style={{ width: '80%', borderRadius: '50%', boxShadow: '' }}
                />
              </Figure>
            </Col>

            <Col>
              <h2 style={{ fontFamily: 'Bebas Neue', color: c.text }}>
                {t.about.name}
              </h2>
              <p style={{ fontFamily: 'Poppins', color: c.text }}>
                {t.about.description01}
              </p>
              <p style={{ fontFamily: 'Poppins', color: c.text }}>
                {t.about.description02}
              </p>

              <Button style={{ fontFamily: 'Poppins', backgroundColor: c.primary, border: 'none', marginRight: 10, borderRadius: 20 }}>
                <b>
                  <a 
                    rel="noreferrer"
                    href="https://drive.google.com/file/d/13S2ZUeirA1IcLMVZhwNYwnrS5lPk_E3J/view"
                    style={{ textDecoration: 'none', color: '#fff' }}
                    target="_blank"
                  >
                    {t.about.openCV}
                  </a>
                </b>
              </Button>

              <Button
                style={{ fontFamily: 'Poppins', backgroundColor: c.primary, border: 'none', marginRight: 10, borderRadius: 20 }}
                onClick={() => setShow(true)}
              >
                <b>{t.about.contact}</b>
              </Button>

              <Modal
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="contact-modal-title"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contact-modal-title">
                    {t.about.contactTitle}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {contacts.map(({ icon, href, label }) => (
                    <p key={label}>
                      <span style={{ marginRight: 10 }}>{icon}</span>
                      <a href={href} target="_blank" style={{ color: '#000', textDecoration: 'none' }}>
                        {label}
                      </a>
                    </p>
                  ))}
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section style={{ width: '100vw', backgroundColor: c.primary, paddingTop: 50, paddingBottom: 50 }}>
        <Container style={{ padding: 10 }}>
          <Row>
            <h2 style={{ fontFamily: 'Bebas Neue', color: '#fff' }}>
              {t.skills.title}
            </h2>
            <p style={{ fontFamily: 'Poppins', color: '#fff' }}>
              {t.skills.subtitle}
            </p>
            <ListGroup>
              {skills.map(({ icon, label }) => (
                <ListGroup.Item
                  key={label}
                  style={{ background: 'none', color: '#fff', fontWeight: 'bold', border: 'none' }}
                >
                  {icon}
                  <span style={{ margin: 10 }}>{label}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Row>
        </Container>
      </section> */}
    </>
  )
}

export default About