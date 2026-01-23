import { Card, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MenuItem({ item }) {
  return (
    <Card className='menu-card' style={{ width: '156px' }}>
      <div className='position-relative'>
        {item.tag && (
          <Badge
            style={{ position: 'absolute' }}
            bg='warning'
            className='menu-badge'
          >
            {item.tag}
          </Badge>
        )}
        <Card.Img
          style={{ objectFit: 'fill', height: '128px' }}
          variant='top'
          src={item.src}
          className='menu-image'
        />
      </div>

      <Card.Body className='text-center'>
        <Card.Title className='fs-6'>{item.name}</Card.Title>
        <Card.Text className='fw-bold' style={{ color: 'red' }}>
          {item.price}
        </Card.Text>
        <div className='d-flex gap-2'>
          <Button variant='dark'>Buy</Button>
          <Link to={`/pizza/${item.id}`} className='btn btn-primary'>
            Details
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}
