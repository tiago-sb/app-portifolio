import { useState } from 'react'
import { Container, Nav, Card } from 'react-bootstrap';
import { Translations } from '../translation/Translation';
import { Themes } from '../theme/Themes';

const Formation = ({language, theme}) => {
  const t = Translations[language]
  const c = Themes[theme]

  const [activeTab, setActiveTab] = useState("cursos");

  return (
    <section style={{ width: '100vw', backgroundColor: c.primary, paddingBottom: 50 }}>
      <h1
        id='formation'
        style={{
          color: '#fff',
          fontFamily: 'Bebas Neue',
          fontSize: 60,
          textAlign: 'center',
          paddingTop: 60,
          paddingBottom: 50
        }}
      >
        {t.formation.title}
      </h1>
      <Container>
        <div className='d-flex flex-row'>
          <Nav variant="underline" className="flex-column flex-shrink-1" style={{ marginRight: 10 }}>
            <Nav.Item>
              <Nav.Link
                className={`${activeTab === "faculdade" ? "active" : ""}`}
                onClick={() => setActiveTab("faculdade")}
                style={{ cursor: 'pointer', color: '#fff', fontFamily: 'Poppins' }}
              >
                {t.formation.college}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={`nav-link ${activeTab === "cursos" ? "active" : ""}`}
                onClick={() => setActiveTab("cursos")}
                style={{ cursor: 'pointer', color: '#fff', fontFamily: 'Poppins' }}
              >
                {t.formation.courses}
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className='w-100' style={{ cursor: 'pointer' }}>
            {
              activeTab === "cursos" ? (
                <>
                  <Card style={{ backgroundColor: c.primary, border: 'none' }}>
                    <Card.Body>
                      <Card.Title style={{ color: '#fff', fontFamily: 'Bebas Neue' }}>
                        {t.formation.typescriptTitle}
                      </Card.Title>
                      <Card.Subtitle style={{ color: '#fff', fontFamily: 'Poppins' }}>
                        {t.formation.typescriptInstitution}
                      </Card.Subtitle>
                      <Card.Text style={{ color: '#fff', fontFamily: 'Poppins' }}>
                        {t.formation.typescriptDescription}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card style={{ backgroundColor: c.primary, border: 'none' }}>
                    <Card.Body>
                      <Card.Title style={{ color: '#fff', fontFamily: 'Bebas Neue' }}>
                        {t.formation.reactTitle}
                      </Card.Title>
                      <Card.Subtitle style={{ color: '#fff', fontFamily: 'Poppins' }}>
                        {t.formation.reactInstitution}
                      </Card.Subtitle>
                      <Card.Text style={{ color: '#fff', fontFamily: 'Poppins' }}>
                        {t.formation.reactDescription}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card style={{ backgroundColor: c.primary, border: 'none' }}>
                    <Card.Body>
                      <Card.Title style={{ color: '#fff', fontFamily: 'Bebas Neue' }}>
                        {t.formation.javascriptTitle}
                      </Card.Title>
                      <Card.Subtitle style={{ color: '#fff', fontFamily: 'Poppins' }}>
                        {t.formation.javascriptInstitution}
                      </Card.Subtitle>
                      <Card.Text style={{ color: '#fff', fontFamily: 'Poppins' }}>
                        {t.formation.javascriptDescription}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card style={{ backgroundColor: c.primary, border: 'none' }}>
                    <Card.Body>
                      <Card.Title style={{ color: '#fff', fontFamily: 'Bebas Neue' }}>
                        {t.formation.javaAndAITitle}
                      </Card.Title>
                      <Card.Subtitle style={{ color: '#fff', fontFamily: 'Poppins' }}>
                        {t.formation.javaAndAIInstitution}
                      </Card.Subtitle>
                      <Card.Text style={{ color: '#fff', fontFamily: 'Poppins' }}>
                        {t.formation.javaAndAIDescription}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card style={{ backgroundColor: c.primary, border: 'none' }}>
                    <Card.Body>
                      <Card.Title style={{ color: '#fff', fontFamily: 'Bebas Neue' }}>
                        {t.formation.javaTitle}
                      </Card.Title>
                      <Card.Subtitle style={{ color: '#fff', fontFamily: 'Poppins' }}>
                        {t.formation.javaInstitution}
                      </Card.Subtitle>
                      <Card.Text style={{ color: '#fff', fontFamily: 'Poppins' }}>
                        {t.formation.javaDescription}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </>
              ) : (
                <Card style={{ backgroundColor: c.primary, border: 'none' }}>
                  <Card.Body>
                    <Card.Title style={{ color: '#fff', fontFamily: 'Bebas Neue' }}>
                      {t.formation.degreeTitle}
                    </Card.Title>
                    <Card.Subtitle style={{ color: '#fff', fontFamily: 'Poppins' }}>
                      {t.formation.degreeInstitution}
                    </Card.Subtitle>
                    <Card.Text style={{ color: '#fff', fontFamily: 'Poppins' }}>
                      {t.formation.degreeDescription}
                    </Card.Text>
                  </Card.Body>
                </Card>
              )
            }
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Formation