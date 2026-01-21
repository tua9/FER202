import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
  return (
    <Container className='py-5'>
      <Row className='mb-4'>
        <Col>
          <h2>About Us</h2>
          <p>
            Pizza App was founded with one simple mission: serve fresh,
            delicious pizza made from high-quality ingredients.
          </p>
        </Col>
      </Row>

      <Row className='mb-4'>
        <Col md={6}>
          <h4>Our Story</h4>
          <p>
            From a small kitchen to a growing brand, we focus on taste,
            consistency, and customer happiness.
          </p>
        </Col>
        <Col md={6}>
          <h4>Why Choose Us?</h4>
          <ul>
            <li>Fresh ingredients 🍅</li>
            <li>Handmade dough daily 🍞</li>
            <li>Fast delivery 🚀</li>
            <li>Affordable prices 💰</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4>Our Promise</h4>
          <p>
            We are committed to delivering the best pizza experience every time
            you order.
          </p>
        </Col>
      </Row>
    </Container>
  )
}
