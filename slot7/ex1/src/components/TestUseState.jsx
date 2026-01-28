import { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

function TestUseState() {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [messsage, setMessage] = useState('')

  const handleClick = () => {
    if (!username || !age) {
      setMessage('')
      return
    }
    setMessage(`Hello, ${username}, ${age} age.`)
  }

  return (
    <Container className=''>
      <Form>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label column sm={3}>
            Username
          </Form.Label>
          <Col>
            <Form.Control
              sm={9}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3'>
          <Form.Label column sm={3}>
            Age
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Col>
        </Form.Group>

        <center>
          <Button variant='primary' onClick={handleClick}>
            Change
          </Button>
        </center>
        <center>{messsage && <h3 className='mt-3'>{messsage}</h3>}</center>
      </Form>
    </Container>
  )
}

export default TestUseState
