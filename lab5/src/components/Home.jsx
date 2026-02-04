import { Container, Card } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Container className='mt-5'>
        <Card className='shadow-lg border-0'>
          <Card.Body className='p-5 text-center'>
            <Card.Title as='h2' className='mb-4 fw-bold'>
              1. Thông tin tác giả
            </Card.Title>
            <Card.Text className='lead'>
              <strong>Mã SV:</strong> DE170051 <br />
              <strong>Họ tên:</strong> Lê Anh Tuấn <br />
              <strong>GitHub:</strong>{' '}
              <a
                href='https://github.com/tua9/FER202'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary fw-bold'
              >
                https://github.com/tua9/FER202
              </a>
            </Card.Text>

            <hr className='my-4' />

            <Card.Title as='h2' className='mb-4 fw-bold'>
              2. Cấu trúc project
            </Card.Title>
            <Card.Text className='text-muted'>
              Project được tổ chức theo mô hình Component-based sử dụng React +
              React Router + React-Bootstrap.
              <br />
              Quản lý state form bằng <strong>useReducer</strong>.<br />
              Validation client-side cho các trường quan trọng.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
