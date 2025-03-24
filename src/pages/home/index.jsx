// import CardContent from '../../components/card'
import NavBar from '../../components/navBar'
// import { Container, Row, Col } from 'react-bootstrap'
// import { FaUserCircle } from 'react-icons/fa'
// import { HiAcademicCap } from 'react-icons/hi2'
// import { LuBrainCircuit } from 'react-icons/lu'
// import { AiFillProject } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './styles.css'

import About from '../../components/about'
import Habilities from '../../components/habilities'
import Formation from '../../components/formation'
import Projects from '../../components/projects'

const Home = () => {
  const navigate = useNavigate()

  const handleAboutMe = () => navigate('/sobre-mim')
  const handleFormation = () => navigate('/formacao')
  const handleHabilities = () => navigate('/habilidades')
  const handleProjects = () => navigate('/projetos')

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <NavBar />
      {/* <Container>
        <Row>
          <Col className={`col fade-in ${isVisible ? 'visible' : ''}`}>
            <CardContent
              src="./images/desenho.png"
              name="Sobre Mim"
              src_logo={<FaUserCircle />}
              onClick={handleAboutMe}
            />
          </Col>
          <Col className={`col fade-in ${isVisible ? 'visible' : ''}`}>
            <CardContent
              src="./images/formacao_academica.png"
              name="Formação Acadêmica"
              src_logo={<HiAcademicCap />}
              onClick={handleFormation}
            />
          </Col>
          <Col className={`col fade-in ${isVisible ? 'visible' : ''}`}>
            <CardContent
              src="./images/habilidades.png"
              name="Habilidades"
              src_logo={<LuBrainCircuit />}
              onClick={handleHabilities}
            />
          </Col>
        </Row>
        <Row>
          <Col className={`col fade-in ${isVisible ? 'visible' : ''}`}>
            <CardContent
              src="./images/projetos.png"
              name="Projetos"
              src_logo={<AiFillProject />}
              width="100%"
              onClick={handleProjects}
            />
          </Col>
        </Row>
      </Container> */}
        <About />
        <Habilities />
        <Formation />
        <Projects />
    </>
  )
}

export default Home