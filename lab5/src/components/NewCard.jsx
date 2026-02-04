// src/components/NewCard.jsx
import React from 'react'
import { Card } from 'react-bootstrap'

function NewCard({ newItem }) {
  return (
    <Card className='h-100 shadow-sm border-0'>
      <Card.Img
        variant='top'
        src={newItem.image}
        alt={newItem.title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='fw-bold mb-3'>{newItem.title}</Card.Title>
        <Card.Text className='text-muted flex-grow-1'>
          {newItem.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default NewCard
