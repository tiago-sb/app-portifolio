import NavBar from '../../components/navBar'
import FooterPage from '../../components/footerPage'

import About from '../../components/about'
import Habilities from '../../components/habilities'
import Formation from '../../components/formation'
import Projects from '../../components/projects'
import './styles.css'

const Home = () => {
  return (
    <>
      <NavBar />
      <About />
      <Habilities />
      <Formation />
      <Projects />
      <FooterPage />
    </>
  )
}

export default Home