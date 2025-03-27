import Card from 'react-bootstrap/Card'
import { Container, Modal, Row, Col, Button } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'
import './styles.css'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineGlobal } from 'react-icons/ai'

const CardContent = ({ name, src, description, languages, repository, deploy }) => {
  const [show, setShow] = useState(false)
  
  const handleClick = () => window.open(repository, '_blank', 'noopener,noreferrer')

  return (
    <>
      <Card
        style={{ cursor: 'pointer', width: '18rem', margin: 10 }}
        onClick={() => setShow(true)}
      >
        <Card.Img variant="top" src={src} className='w-100' />
        <Card.Body>
          <Card.Title style={{ fontFamily: 'Bebas Neue', color: 'rgba(33, 37, 41, 0.75)', textAlign: 'center' }}>
            {name}
          </Card.Title>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: 'Bebas Neue' }}>
            {name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <img src={src} alt={name} style={{ borderRadius: 10 }} />
              </Col>
              <Col>
                <p style={{ fontFamily: 'Poppins' }}>{description}</p>
                <Stack direction="horizontal" gap={2}>
                  {
                    languages.map((language) => (
                      <Badge bg="dark" style={{ padding: 5, textTransform: 'capitalize', fontFamily: 'Poppins' }}>
                        {language}
                      </Badge>
                    ))
                  }
                </Stack>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Button variant="dark" style={{ marginRight: 10 }} onClick={handleClick}>
                  <FaGithub style={{ marginRight: 10 }} />
                  <b>Acesso ao Repositório</b>
                </Button>
                {
                  deploy ? (
                    <Button variant='dark'>
                      <AiOutlineGlobal style={{ marginRight: 10 }} />
                      <a href={deploy}><b>Acesso ao Projeto</b></a>
                    </Button>
                  ) : (
                    <>
                    </>
                  )
                }
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CardContent