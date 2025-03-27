import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const FooterPage = () => {
  return (
    <footer style={{ backgroundColor: '#2a29a4' }} 
      className={`text-white py-3`}>
      <Container>
        <Row>
          <Col>
            <h2 style={{ fontFamily: 'Bebas Neue' }}>
              fique por dentro, siga-me!
            </h2>
            <a href="https://www.instagram.com/tiagobella.05/" target='_blank' style={{ color: 'white' }}>
              <FaInstagram size={24} style={{ margin: 5 }} />
            </a>
            <a href="https://x.com/wtftsb_" target='_blank' style={{ color: 'white' }}>
              <FaSquareXTwitter size={24} style={{ margin: 5 }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100018877909315" target='_blank' style={{ color: 'white' }}>
              <FaFacebook size={24} style={{ margin: 5 }} />
            </a>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col>
            <h2 style={{ fontFamily: 'Bebas Neue' }}>
              contato
            </h2>
            <Col>
              <a href="https://api.whatsapp.com/send?phone=5577999662311&text=Ola" 
                style={{ color: 'white', fontFamily: 'Poppins' }}>
                +55 77 999662311
              </a>
            </Col>
            <Col>
              <a href="https://criarmeulink.com.br/u/1690329618" 
                style={{ color: 'white', fontFamily: 'Poppins' }}>
                belatiago72@gmail.com
              </a>
            </Col>
          </Col>
          <Col className="text-end">
            <h2 style={{ fontFamily: 'Bebas Neue' }}>
              portfolio
            </h2>
          </Col>

        </Row>
        <Row>
          <Col className="text-center" style={{ fontFamily: 'Poppins', marginTop: 20 }}>
            <p >© Tiago Bela Produções</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterPage