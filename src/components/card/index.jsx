import Card from 'react-bootstrap/Card'
import './styles.css'

const CardContent = ({ name, src, src_logo, width, onClick }) => {
  return (
    <Card style={{ width: width, marginBottom: 15, height: '18rem',
      background: `url("${src}") no-repeat center center`,
      backgroundSize: 'cover', cursor: 'pointer'
     }} onClick={onClick} className='card'>
      <Card.Body style={{ color: '#fff', textShadow: '1px 1px 10px #000' }}>
        <Card.Title>
          {name}
        </Card.Title>
        <Card.Body>
          {src_logo}
        </Card.Body>
      </Card.Body>
    </Card>
  )
}

export default CardContent