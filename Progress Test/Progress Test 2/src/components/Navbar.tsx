// src/components/Navbar.jsx
import { useNavigate } from 'react-router-dom'
import { Navbar as BSNavbar, Nav, Container, Button } from 'react-bootstrap'
import { useAccount } from '../contexts/AccountContext' // điều chỉnh đường dẫn nếu cần

function Navbar() {
  const { state, dispatch } = useAccount()
  const { currentUser } = state
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    // Có thể xóa token/localStorage nếu bạn dùng
    // localStorage.removeItem('token');
    navigate('/')
  }

  // Nếu chưa đăng nhập → không render Navbar (hoặc render phiên bản khác)
  if (!currentUser) return null

  return (
    <BSNavbar bg='white' expand='lg' className='mb-4 shadow-sm border-bottom'>
      <Container>
        <BSNavbar.Brand
          href='/home'
          className='fw-bold d-flex align-items-center'
        >
          <img
            src='/images/logo.jpg'
            alt='Logo'
            style={{ height: '35px', marginRight: '10px' }}
          />
          PersonalBudget
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls='basic-navbar-nav' />

        <BSNavbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto align-items-center'>
            <span className='text-muted me-3' style={{ fontSize: '0.9rem' }}>
              Signed in as <strong>{currentUser.fullName}</strong>
            </span>

            <Button variant='outline-danger' size='sm' onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  )
}

export default Navbar
