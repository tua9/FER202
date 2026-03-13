import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'

function NavbarExpenses() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login') // Chuyển hướng về trang đăng nhập sau khi đăng xuất
  }

  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand>
          <img
            alt=''
            src='/logo.png'
            width='30'
            height='30'
            className='d-inline-block align-top me-2'
          />
          Personal Budget
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto align-items-center'>
            {isAuthenticated && user && (
              <>
                <Navbar.Text className='me-3'>
                  Signed in as <strong>{user.fullName}</strong>
                </Navbar.Text>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarExpenses
