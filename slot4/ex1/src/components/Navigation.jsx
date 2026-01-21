import { Container, Nav, Navbar } from 'react-bootstrap'
import SearchBar from './SearchBar'

import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <Navbar bg='white' className='w-100'>
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>
          Pizza App
        </Navbar.Brand>

        <Nav className='mx-auto gap-5'>
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/about'>
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to='/contact'>
            Contact
          </Nav.Link>
        </Nav>

        <Nav>
          <SearchBar />
        </Nav>
      </Container>
    </Navbar>
  )
}
