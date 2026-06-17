import { Accordion } from "react-bootstrap"
import { Themes } from "../theme/Themes"

const AcordionItem = ({item, idx, theme}) => {
  const c = Themes[theme]
  
  return (
    <Accordion.Item eventKey={idx} style={{ backgroundColor: c.background }}>
      <Accordion.Header style={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>
        <b style={{ color: c.text }}>
          {item.name}
        </b>
      </Accordion.Header>
      <Accordion.Body>
        <img src={item.url} alt={item.name} style={{ width: '100%' }}/>
        <p style={{ color: c.text, fontFamily: 'Poppins', padding: 10, textAlign: 'center' }}>
          {item.description}
        </p>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default AcordionItem