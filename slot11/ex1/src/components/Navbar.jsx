// src/components/Navbar.jsx
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <BootstrapNavbar bg='dark' variant='dark' expand='lg' className='mb-4'>
      <Container>
        <BootstrapNavbar.Brand href='/'>
          React Hooks Practice
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls='basic-navbar-nav' />
        <BootstrapNavbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              as={NavLink}
              to='/exercise1'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Exercise 1
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to='/exercise2'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Exercise 2 (Auth)
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
