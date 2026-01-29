import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavbarMenu() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>React Exercises</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link as={Link} to='/exercise1'>
            Exercise 1
          </Nav.Link>
          <Nav.Link as={Link} to='/exercise2'>
            Exercise 2
          </Nav.Link>
          <Nav.Link as={Link} to='/exercise3'>
            Exercise 3
          </Nav.Link>
          <Nav.Link as={Link} to='/exercise4'>
            Exercise 4
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarMenu
