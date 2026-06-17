import AcordionItem from "../acordionItem"
import { Container, Row, Col, Accordion } from "react-bootstrap"
import { Translations } from "../translation/Translation"
import { Themes } from "../theme/Themes"
import './index.css'

const Habilities = ({ language, theme }) => {
  const t = Translations[language]
  const c = Themes[theme]

  const accordionClass = theme === 'dark' ? 'accordion-dark' : ''

  const lista_front = [
    { name: "html",       url: "./images/habilidades/html.png",        description: t.habilities.html },
    { name: "css",        url: "./images/habilidades/css.png",         description: t.habilities.css },
    { name: "javascript", url: "./images/habilidades/java_script.png", description: t.habilities.javascript },
    { name: "typescript", url: "./images/habilidades/type_script.png", description: t.habilities.typescript },
    { name: "react",      url: "./images/habilidades/react.png",       description: t.habilities.react },
  ]

  const lista_back = [
    { name: "node", url: "./images/habilidades/node.png", description: t.habilities.node },
    { name: "java", url: "./images/habilidades/java.png", description: t.habilities.java },
  ]

  const lista_outros = [
    { name: "c++",     url: "./images/habilidades/c++.png",     description: t.habilities.cpp },
    { name: "haskell", url: "./images/habilidades/haskell.png", description: t.habilities.haskell },
    { name: "prolog",  url: "./images/habilidades/prolog.png",  description: t.habilities.prolog },
    { name: "sql",     url: "./images/habilidades/sql.png",     description: t.habilities.sql },
  ]

  const sections = [
    { title: t.habilities.frontend, list: lista_front },
    { title: t.habilities.backend,  list: lista_back },
    { title: t.habilities.other,    list: lista_outros },
  ]

  return (
    <div style={{ backgroundColor: c.background }}>
      <h1
        id="habilities"
        style={{
          color: c.text,
          fontFamily: 'Bebas Neue',
          fontSize: 60,
          textAlign: 'center',
          paddingTop: 60,
          paddingBottom: 50,
        }}
      >
        {t.habilities.title}
      </h1>

      <Container>
        <Row style={{ borderRadius: 10, paddingBottom: 50 }}>
          {sections.map(({ title, list }) => (
            <Col key={title}>
              <h2 style={{ fontFamily: 'Bebas Neue', color: c.text }}>
                {title}
              </h2>
              <Accordion defaultActiveKey="0" className={accordionClass}>
                {list.map((item, idx) => (
                  <AcordionItem key={item.name} item={item} idx={idx} theme={theme} />
                ))}
              </Accordion>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Habilities