import { section } from 'motion/react-client'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

const Project = () => {
  return (
    <section style={{ backgroundColor: '#fff' }}>
      <Container>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src="./images/formacao_academica.png" alt="" srcset=""/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>

  )
}

export default Project