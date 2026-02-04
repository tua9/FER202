import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { slideImages } from '../data/slideImages'

export default function SlideBar() {
  return (
    <Carousel
      interval={4500} // tự động chuyển sau 4.5 giây
      indicators // hiển thị chấm tròn dưới
      controls // nút mũi tên trái/phải
      pause='hover' // tạm dừng khi di chuột vào
      className='shadow-lg rounded overflow-hidden'
    >
      {slideImages.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className='d-block w-100'
            src={slide.image}
            alt={slide.title}
            style={{
              height: '500px',
              objectFit: 'cover',
            }}
          />
          <Carousel.Caption className='bg-dark bg-opacity-65 py-4 rounded'>
            <h3 className='fw-bold mb-2'>{slide.title}</h3>
            <p className='mb-0'>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
