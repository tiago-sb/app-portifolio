import Card from 'react-bootstrap/Card'
import { Container, Modal, Row, Col, Button } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'
import './styles.css'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineGlobal } from 'react-icons/ai'

const CardContent = ({ name, src, description, languages, repository, deploy, theme, t }) => {
  const [show, setShow] = useState(false)
  const isDark = theme === 'dark'

  const handleClickRepository = () => window.open(repository, '_blank', 'noopener,noreferrer')
  const handleClickDeploy = () => window.open(deploy, '_blank', 'noopener,noreferrer')

  return (
    <>
      <Card
        className={isDark ? 'card-dark' : ''}
        style={{ cursor: 'pointer', width: '18rem', margin: 10 }}
        onClick={() => setShow(true)}
      >
        <Card.Img variant="top" src={src} className="w-100" />
        <Card.Body>
          <Card.Title style={{ fontFamily: 'Bebas Neue', color: isDark ? '#f1f5f9' : undefined, textAlign: 'center' }}>
            {name}
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="card-modal-title"
        size="lg"
        className={isDark ? 'modal-dark' : ''}
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="card-modal-title"
            style={{ fontFamily: 'Bebas Neue', color: isDark ? '#f1f5f9' : undefined }}
          >
            {name}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <img src={src} alt={name} style={{ borderRadius: 10, width: '100%' }} />
              </Col>
              <Col>
                <p style={{ fontFamily: 'Poppins', color: isDark ? '#f1f5f9' : undefined }}>
                  {description}
                </p>
                <Stack direction="horizontal" gap={2} className="flex-wrap">
                  {languages.map((language) => (
                    <Badge
                      key={language}
                      bg={isDark ? 'secondary' : 'dark'}
                      style={{ padding: 5, textTransform: 'capitalize', fontFamily: 'Poppins' }}
                    >
                      {language}
                    </Badge>
                  ))}
                </Stack>
              </Col>
            </Row>

            <Row style={{ marginTop: 10 }}>
              <Col className="d-flex gap-2">
                <Button variant={isDark ? 'outline-light' : 'dark'} onClick={handleClickRepository}>
                  <FaGithub style={{ marginRight: 8 }} />
                  <b>{t.projects.repository}</b>
                </Button>
                {deploy && (
                  <Button variant={isDark ? 'outline-light' : 'dark'} onClick={handleClickDeploy}>
                    <AiOutlineGlobal style={{ marginRight: 8 }} />
                    <b>{t.projects.deploy}</b>
                  </Button>
                )}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CardContent