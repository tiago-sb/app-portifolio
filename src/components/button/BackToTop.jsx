import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BackToTop = ({ theme }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)

    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const isDark = theme === 'dark'

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            width: 45,
            height: 45,
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            fontSize: 18,
            fontWeight: 'bold',
            backgroundColor: isDark ? '#fff' : '#111',
            color: isDark ? '#111' : '#fff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            zIndex: 999
          }}
        >
          <h3>
            ↑
          </h3>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop