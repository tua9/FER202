import MenuItem from './MenuItem'
import { Col, Container, Row } from 'react-bootstrap'
import PizzaList from '../data/PizzaList'

export default function Menu() {
  return (
    <div className='menu' style={{ position: 'relative' }}>
      <h1 className='title'>Our Menu</h1>
      <Container>
        <Row>
          {PizzaList.map((item, index) => (
            <Col
              key={index}
              xs={6}
              md={3}
              xl={3}
              lg={3}
              className='d-flex justify-content-center mb-4'
            >
              <MenuItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
