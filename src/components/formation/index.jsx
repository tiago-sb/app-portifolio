import { useState } from 'react'
import { Container, Nav, Card } from 'react-bootstrap';

const Formation = () => {
  const [activeTab, setActiveTab] = useState("cursos");

  return (
    <section style={{ width: '100vw', backgroundColor: '#2a29a4', paddingBottom: 50, paddingTop: 50 }}>
      <Container>
        <div className='d-flex flex-row'>
          <Nav variant="underline" className="flex-column flex-shrink-1" style={{ marginRight: 10 }}>
            <Nav.Item>
              <Nav.Link
                className={`${activeTab === "faculdade" ? "active" : ""}`}
                onClick={() => setActiveTab("faculdade")}
                style={{ cursor: 'pointer', color: '#fff', fontFamily: 'Poppins' }}
              >
                Faculdade
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={`nav-link ${activeTab === "cursos" ? "active" : ""}`}
                onClick={() => setActiveTab("cursos")}
                style={{ cursor: 'pointer', color: '#fff', fontFamily: 'Poppins' }}
              >
                Cursos
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className='w-100'>
            {
              activeTab === "cursos" ? (
                <>
                  <Card style={{ backgroundColor: '#2a29a4', border: 'none' }}>
                    <Card.Body>
                      <Card.Title style={{ color: '#fff', fontFamily: 'Bebas Neue' }}>
                        Formação TypeScript Fullstack Developer - Completo
                      </Card.Title>
                      <Card.Subtitle style={{ color: '#fff', fontFamily: 'Poppins' }}>
                        DIO
                      </Card.Subtitle>
                      <Card.Text style={{ color: '#fff', fontFamily: 'Poppins' }}>
                        O curso de TypeScript na DIO forneceu uma base sólida para a 
                        utilização dessa linguagem que aprimora o JavaScript, tornando o 
                        código mais seguro, escalável e fácil de manter. Através de projetos práticos e exercícios, 
                        pude aprender a unir o conhecimento da área front-end com a de back-end na prática.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card style={{ backgroundColor: '#2a29a4', border: 'none' }}>
                    <Card.Body>
                      <Card.Title style={{ color: '#fff', fontFamily: 'Bebas Neue' }}>
                        Formação React Developer - Completo
                      </Card.Title>
                      <Card.Subtitle style={{ color: '#fff', fontFamily: 'Poppins' }}>
                        DIO
                      </Card.Subtitle>
                      <Card.Text style={{ color: '#fff', fontFamily: 'Poppins' }}>
                        Ao concluir o curso de React na DIO, pude obter uma visão abrangente sobre como construir 
                        interfaces dinâmicas e reutilizáveis utilizando uma das bibliotecas mais populares do mercado 
                        de tecnologia atual. O curso focou em conceitos fundamentais como componentes, hooks, estado 
                        e propriedades e ciclo de vida dos componentes.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card style={{ backgroundColor: '#2a29a4', border: 'none' }}>
                    <Card.Body>
                      <Card.Title style={{ color: '#fff', fontFamily: 'Bebas Neue' }}>
                        Formação JavaScript Developer -  Completo
                      </Card.Title>
                      <Card.Subtitle style={{ color: '#fff', fontFamily: 'Poppins' }}>
                        DIO
                      </Card.Subtitle>
                      <Card.Text style={{ color: '#fff', fontFamily: 'Poppins' }}>
                        Ao completar o curso de JavaScript na DIO, adiquiri uma compreensão profunda dos fundamentos dessa 
                        linguagem essencial para o desenvolvimento web. O curso abordou conceitos chave como tipos de dados, 
                        estruturas de controle, funções, arrays, objetos, e muito mais, com uma ênfase 
                        especial em boas práticas e legibilidade do código. Além disso, o curso proporcionou uma sólida 
                        base em manipulação do DOM e eventos, que são cruciais para a criação de interfaces dinâmicas e interativas.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </>
              ) : (
                <Card style={{ backgroundColor: '#2a29a4', border: 'none' }}>
                  <Card.Body>
                    <Card.Title style={{ color: '#fff', fontFamily: 'Bebas Neue' }}>
                      Bacharel em Ciência da Computação - Cursando
                    </Card.Title>
                    <Card.Subtitle style={{ color: '#fff', fontFamily: 'Poppins' }}>
                      UESB
                    </Card.Subtitle>
                    <Card.Text style={{ color: '#fff', fontFamily: 'Poppins' }}>
                      Como estudante de ciência da computação, tem adquirido uma base sólida
                      dos principais fundamentos da computação, isso inclui assuntos como algoritmos,
                      estruturas de dados, teoria da computação interação humano-computador,
                      dentre outros assuntos. Princípios estes que são muito valorizados e requisitados
                      no mercado de programação da atualidade.
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