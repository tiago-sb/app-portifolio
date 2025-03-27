import AcordionItem from "../acordionItem"
import { Container, Row, Col, Accordion } from "react-bootstrap"

const Habilities = () => {
  const lista_front = [
    {
      name: "html",
      url: "./images/habilidades/html.png",
      description: "HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web"
    },
    {
      name: "css",
      url: "./images/habilidades/css.png",
      description: "CSS (Folhas de Estilo em Cascata) é um mecanismo para adicionar estilos (cores, fontes, espaçamento, etc.) a uma página web"
    },
    {
      name: "javascript",
      url: "./images/habilidades/java_script.png",
      description: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma"
    },
    {
      name: "typescript",
      url: "./images/habilidades/type_script.png",
      description: "TypeScript é um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem"
    },
    {
      name: "react",
      url: "./images/habilidades/react.png",
      description: "React (React.js ou ReactJS) é uma biblioteca front-end JavaScript com foco em criar interfaces de usuário em páginas web"
    }
  ]

  const lista_back = [
    {
      name: "node",
      url: "./images/habilidades/node.png",
      description: "Node.js é um software baseado no interpretador V8 do Google que permite a execução de códigos JavaScript fora de um navegador web"
    },
    {
      name: "java",
      url: "./images/habilidades/java.png",
      description: "Java é uma linguagem de programação orientada a objeto, multiplataforma que é executada em bilhões de dispositivos em todo o mundo"
    }
  ]

  const lista_outros = [
    {
      name: "c++",
      url: "./images/habilidades/c++.png",
      description: "C++ é uma linguagem de programação compilada multi-paradigma e de uso geral"
    },
    {
      name: "haskell",
      url: "./images/habilidades/haskell.png",
      description: "haskell é uma linguagem de programação estaticamente tipada que segue o paradigma funcional"
    },
    {
      name: "prolog",
      url: "./images/habilidades/prolog.png",
      description: "linguagem de programação baseada em lógica formal, que serve para resolver problemas que envolvem objetos e relações entre eles"
    },
    {
      name: "sql",
      url: "./images/habilidades/sql.png",
      description: "linguagem de programação que permite armazenar, manipular, recuperar e processar dados em bancos de dados relacionais"
    },
  ]

  return (
    <>
      <h1
          id='habilities'
          style={{ 
            color: 'rgba(33, 37, 41, 0.75)', 
            fontFamily: 'Bebas Neue', 
            fontSize: 60, 
            textAlign: 'center',
            paddingTop: 60,
            paddingBottom: 50 
          }}
        >
          Habilidades
        </h1>
      <Container>
        <Row style={{ borderRadius: 10, paddingBottom: 50 }}>
          <Col>
            <h2 style={{ fontFamily: 'Bebas Neue', color: 'rgba(33, 37, 41, 0.75)' }}>
              Front-End
            </h2>
            <Accordion defaultActiveKey="0">
              {
                lista_front.map((item, idx) => (
                  <AcordionItem item={item} idx={idx} />
                ))
              }
            </Accordion>
          </Col>
          <Col>
            <h2 style={{ fontFamily: 'Bebas Neue', color: 'rgba(33, 37, 41, 0.75)' }}>
              Back-End
            </h2>
            <Accordion defaultActiveKey="0">
              {
                lista_back.map((item, idx) => (
                  <AcordionItem item={item} idx={idx} />
                ))
              }
            </Accordion>
          </Col>
          <Col>
            <h2 style={{ fontFamily: 'Bebas Neue', color: 'rgba(33, 37, 41, 0.75)' }}>
              Outras Tecnologias
            </h2>
            <Accordion defaultActiveKey="0">
              {
                lista_outros.map((item, idx) => (
                  <AcordionItem item={item} idx={idx} />
                ))
              }
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Habilities