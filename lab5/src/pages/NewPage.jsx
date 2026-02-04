// src/pages/NewPage.jsx
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { newLists } from '../data/newsList' // sửa tên file nếu bạn dùng newsList.js
import NewCard from '../components/NewCard'

function NewPage() {
  return (
    <Container className='py-5'>
      <h2 className='text-center mb-5 fw-bold'>Latest News</h2>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {newLists.map((newItem) => (
          <Col key={newItem.id}>
            <NewCard newItem={newItem} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default NewPage
