import { useState } from 'react'

import NavBar from '../../components/navBar'
import FooterPage from '../../components/footerPage'
import About from '../../components/about'
import Habilities from '../../components/habilities'
import Formation from '../../components/formation'
import Projects from '../../components/projects'
import TimeLine from '../../components/timeline/TimeLine'
import BackToTop from '../../components/button/BackToTop'
import { AnimatePresence, motion } from 'framer-motion'
import './index.css'

const Home = () => {
  const [language, setLanguage] = useState('pt')
  const [theme, setTheme] = useState('light')

  return (
    <>
      <motion.div
        key={theme + language}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <NavBar language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />

        <About language={language} theme={theme} />
        <Habilities language={language} theme={theme} />
        <Formation language={language} theme={theme} />
        <Projects language={language} theme={theme} />
        <TimeLine language={language} theme={theme}/>
        <FooterPage language={language} theme={theme} />
        <BackToTop theme={theme} />
      </motion.div>
    </>
  )
}

export default Home