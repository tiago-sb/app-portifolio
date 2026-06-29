import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiJava,
  DiBootstrap,
  DiGit,
  DiMysql,
  DiPostgresql,
  DiProlog,
  DiDocker
} from "react-icons/di";

import {
  SiTypescript,
  SiVite,
  SiSpringboot,
  SiGithub,
  SiGitlab,
  SiCplusplus,
  SiHaskell,
} from "react-icons/si";

import AcordionItem from "../acordionItem"
import { Container, Row, Col, Accordion } from "react-bootstrap"
import { Translations } from "../translation/Translation"
import { Themes } from "../theme/Themes"
import { TechCard } from "./TechCard";
import './index.css'

const Habilities = ({ language, theme }) => {
  const t = Translations[language]
  const c = Themes[theme]

  const accordionClass = theme === 'dark' ? 'accordion-dark' : ''

  const lista_front = [
    { name: "html", icon: DiHtml5, description: t.habilities.html, level: 100 },
    { name: "css", icon: DiCss3, description: t.habilities.css, level: 100 },
    { name: "javascript", icon: DiJavascript1, description: t.habilities.javascript, level: 90 },
    { name: "typescript", icon: SiTypescript, description: t.habilities.typescript, level: 90 },
    { name: "react", icon: DiReact, description: t.habilities.react, level: 85 },
    { name: "bootstrap", icon: DiBootstrap, description: t.habilities.bootstrap, level: 70 },
    { name: "vite", icon: SiVite, description: t.habilities.vite, level: 85 },
  ];

  const lista_back = [
    { name: "node", icon: DiNodejs, description: t.habilities.node, level: 90 },
    { name: "java", icon: DiJava, description: t.habilities.java, level: 100 },
    { name: "springboot", icon: SiSpringboot, description: t.habilities.springboot, level: 90 },
  ];

  const lista_banco = [
    { name: "postgresql", icon: DiPostgresql, description: t.habilities.postgresql, level: 85 },
    { name: "mysql", icon: DiMysql, description: t.habilities.mysql, level: 85 },
  ];

  const lista_devops = [
    { name: "git", icon: DiGit, description: t.habilities.git, level: 85 },
    { name: "github", icon: SiGithub, description: t.habilities.github, level: 100 },
    { name: "docker", icon: DiDocker, description: t.habilities.docker, level: 85 },
  ];

  const lista_outros = [
    { name: "c++", icon: SiCplusplus, description: t.habilities.cpp, level: 85 },
    { name: "haskell", icon: SiHaskell, description: t.habilities.haskell, level: 60 },
    { name: "prolog", icon: DiProlog, description: t.habilities.prolog, level: 60 }
  ];

  const sections = [
    { title: t.habilities.frontend, list: lista_front },
    { title: t.habilities.backend,  list: lista_back },
    { title: t.habilities.database,  list: lista_banco },
    { title: t.habilities.devops,  list: lista_devops },
    { title: t.habilities.other,    list: lista_outros }
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
              <div 
                className="custom-scroll"
                style={{ maxHeight: "70vh", "--scrollbar": c.text }}
              >
                {
                  list.map((item, idx) => (
                    <TechCard 
                      name={item.name} 
                      description={item.description} 
                      icon={item.icon} 
                      theme={theme} 
                      level={item.level}
                    />
                  ))
                }
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Habilities