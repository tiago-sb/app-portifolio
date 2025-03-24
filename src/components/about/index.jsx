import ListGroup from 'react-bootstrap/ListGroup'
import { Container, Row, Col, Figure, Button, Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react'

import {
  RiEmotionLine, RiFileWarningLine, RiShieldUserLine, RiSpeakLine,
  RiTeamLine, RiEmotionHappyLine, RiLightbulbLine, RiTimeLine
} from 'react-icons/ri'
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

import '../../pages/home/styles.css'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <section style={{ width: '100vw', paddingTop: 50, paddingBottom: 50 }}>
        <Container>
          <Row>
            <Col className={`fade-in ${isVisible ? 'visible' : ''}`}>
              <Figure>
                <Figure.Image
                  alt="foto tiago bela"
                  src="./images/foto_minha.jpg"
                  style={{ width: '80%', borderRadius: 10 }}
                />
              </Figure>
            </Col>
            <Col className={`fade-in ${isVisible ? 'visible' : ''}`}>
              <h2 style={{ fontFamily: 'Bebas Neue', color: 'rgba(33, 37, 41, 0.75)' }}>
                Tiago Santos Bela
              </h2>
              <p style={{ fontFamily: 'Poppins', color: 'rgba(33, 37, 41, 0.75)' }}>
                Um desenvolvedor de software brasileiro apaixonado por
                programação que está se graduando no curso de ciência da computação.
                Visando aperfeiçoar suas habilidades e conhecimentos na área da tecnologia
                tem lidado constantemente com projetos que irão torná-lo um profissional
                de excelência que está em constante evolução esculpindo uma carreira
                com inovação e criatividade.
              </p>
              <p style={{ fontFamily: 'Poppins', color: 'rgba(33, 37, 41, 0.75)' }}>
                Busca oportunidades na área de desenvolvimento. Principalmente vagas na
                senioridade de estagiário/júnior na área da programação web. Seu principal
                o objetivo é colocar em prática todo conhecimento que tem aprendido e
                praticado regularmente, para dessa forma evoluir e construir uma excelente
                carreira na área do desenvolvimento.
              </p>
              <Button style={{ fontFamily: 'Poppins', backgroundColor: '#2a29a4', border: 'none', marginRight: 10, borderRadius: 20 }} >
                <b>
                  <a
                    href="https://drive.google.com/file/d/11HVSXXWGWhdGl1u1XXJZBGL_zj14K7c4/view?usp=drive_link"
                    style={{ textDecoration: 'none', color: '#fff' }}
                    target='_blank'
                  >
                    Abrir CV
                  </a>
                </b>
              </Button>
              <Button style={{ fontFamily: 'Poppins', backgroundColor: '#2a29a4', border: 'none', marginRight: 10, borderRadius: 20 }} >
                <b onClick={() => setShow(true)}>
                  Entrar em Contato
                </b>
              </Button>
              <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Contato
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <FaInstagram style={{ marginRight: 10 }} />
                    <a
                      href="https://www.instagram.com/tiagobella.05/"
                      target='_blank'
                      style={{ color: '#000', textDecoration: 'none' }}
                    >
                      Instagram
                    </a>
                  </p>
                  <p>
                    <FaLinkedin style={{ marginRight: 10 }} />
                    <a
                      href="https://www.linkedin.com/in/tiago-bela-215103238/"
                      target='_blank'
                      style={{ color: '#000', textDecoration: 'none' }}
                    >
                      LinkedIn
                    </a>
                  </p>
                  <p>
                    <MdOutlineEmail style={{ marginRight: 10 }} />
                    <a
                      href="https://criarmeulink.com.br/u/1690329618"
                      target='_blank'
                      style={{ color: '#000', textDecoration: 'none' }}
                    >
                      Email
                    </a>
                  </p>
                  <p>
                    <FaDiscord style={{ marginRight: 10 }} />
                    <a
                      href="https://discord.com/login?redirect_to=%2Fchannels%2F%40me%2F964609060173389864"
                      target='_blank'
                      style={{ color: '#000', textDecoration: 'none' }}
                    >
                      Discord
                    </a>
                  </p>
                  <p>
                    <FaFacebook style={{ marginRight: 10 }} />
                    <a
                      href="https://www.facebook.com/profile.php?id=100018877909315"
                      target='_blank'
                      style={{ color: '#000', textDecoration: 'none' }}
                    >
                      Facebook
                    </a>
                  </p>
                  <p>
                    <FaWhatsapp style={{ marginRight: 10 }} />
                    <a
                      href="https://wa.link/c70ad6"
                      target='_blank'
                      style={{ color: '#000', textDecoration: 'none' }}
                    >
                      Whatssap
                    </a>
                  </p>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ width: '100vw', backgroundColor: '#2a29a4', paddingTop: 50, paddingBottom: 50 }}>
        <Container style={{ padding: 10 }}>
          <Row className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <h2 style={{ fontFamily: 'Bebas Neue', color: '#fff' }}>
              Competências
            </h2>
            <p style={{ fontFamily: 'Poppins', color: '#fff' }}>
              Algumas de minhas soft skills que podem contribuir com o ambiente de trabalho
              empresarial
            </p>
            <ListGroup>
              <ListGroup.Item style={{ background: 'none', color: '#fff', fontWeight: 'bold' }}>
                <RiSpeakLine />
                <span style={{ margin: 10 }}>
                  Comunicação
                </span>
              </ListGroup.Item>
              <ListGroup.Item style={{ background: 'none', color: '#fff', fontWeight: 'bold' }}>
                <RiEmotionHappyLine />
                <span style={{ margin: 10 }}>
                  Empatia
                </span>
              </ListGroup.Item>
              <ListGroup.Item style={{ background: 'none', color: '#fff', fontWeight: 'bold' }}>
                <RiTeamLine />
                <span style={{ margin: 10 }}>
                  Trabalho em equipe
                </span>
              </ListGroup.Item>
              <ListGroup.Item style={{ background: 'none', color: '#fff', fontWeight: 'bold' }}>
                <RiLightbulbLine />
                <span style={{ margin: 10 }}>
                  Pensamento Crítico
                </span>
              </ListGroup.Item>
              <ListGroup.Item style={{ background: 'none', color: '#fff', fontWeight: 'bold' }}>
                <RiTimeLine />
                <span style={{ margin: 10 }}>
                  Gestão do Tempo
                </span>
              </ListGroup.Item>
              <ListGroup.Item style={{ background: 'none', color: '#fff', fontWeight: 'bold' }}>
                <RiShieldUserLine />
                <span style={{ margin: 10 }}>
                  Adaptabilidade
                </span>
              </ListGroup.Item>
              <ListGroup.Item style={{ background: 'none', color: '#fff', fontWeight: 'bold' }}>
                <RiFileWarningLine />
                <span style={{ margin: 10 }}>
                  Resolução de Problemas
                </span>
              </ListGroup.Item>
              <ListGroup.Item style={{ background: 'none', color: '#fff', fontWeight: 'bold' }}>
                <RiEmotionLine />
                <span style={{ margin: 10 }}>
                  Inteligência Emocional
                </span>
              </ListGroup.Item>
            </ListGroup>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About