// src/components/DangKy.jsx
import React, { useState } from 'react'
import { Container, Form, Button, Row, Col, InputGroup } from 'react-bootstrap'

export default function DangKy() {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  return (
    <Container className='py-5'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className='mb-3'>
          {/* First name */}
          <Form.Group as={Col} md='4' controlId='validationCustom01'>
            <Form.Label>First name</Form.Label>
            <Form.Control required type='text' placeholder='First name' />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/* Last name */}
          <Form.Group as={Col} md='4' controlId='validationCustom02'>
            <Form.Label>Last name</Form.Label>
            <Form.Control required type='text' placeholder='Last name' />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/* Username - có icon @ */}
          <Form.Group as={Col} md='4' controlId='validationCustomUsername'>
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                type='text'
                placeholder='Username'
                defaultValue='username'
                required
                aria-describedby='inputGroupPrepend'
              />
              <Form.Control.Feedback type='invalid'>
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          {/* City */}
          <Form.Group as={Col} md='6' controlId='validationCustom03'>
            <Form.Label>City</Form.Label>
            <Form.Control type='text' placeholder='City' required />
            <Form.Control.Feedback type='invalid'>
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>

          {/* State */}
          <Form.Group as={Col} md='3' controlId='validationCustom04'>
            <Form.Label>State</Form.Label>
            <Form.Control type='text' placeholder='State' required />
            <Form.Control.Feedback type='invalid'>
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Zip */}
          <Form.Group as={Col} md='3' controlId='validationCustom05'>
            <Form.Label>Zip</Form.Label>
            <Form.Control type='text' placeholder='Zip' required />
            <Form.Control.Feedback type='invalid'>
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        {/* Checkbox Agree */}
        <Form.Group className='mb-3'>
          <Form.Check
            required
            label='Agree to terms and conditions'
            feedback='You must agree before submitting.'
            feedbackType='invalid'
          />
        </Form.Group>

        {/* Nút Submit */}
        <Button type='submit' variant='primary'>
          Submit form
        </Button>
      </Form>
    </Container>
  )
}
