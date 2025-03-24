import { Accordion } from "react-bootstrap"

const AcordionItem = ({item, idx}) => {
  return (
    <Accordion.Item eventKey={idx}>
      <Accordion.Header style={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>
        <b style={{ color: 'rgba(33, 37, 41, 0.75)' }}>
          {item.name}
        </b>
      </Accordion.Header>
      <Accordion.Body>
        <img src={item.url} alt={item.name} style={{ width: '100%' }}/>
        <p style={{ color: 'rgba(33, 37, 41, 0.75)', fontFamily: 'Poppins', padding: 10, textAlign: 'center' }}>
          {item.description}
        </p>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default AcordionItem