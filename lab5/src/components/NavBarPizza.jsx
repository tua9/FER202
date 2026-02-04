import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function NavBarPizza() {
  return (
    <Navbar
      bg='dark'
      variant='dark'
      expand='lg'
      sticky='top'
      className='shadow'
    >
      <Container>
        <Navbar.Brand href='/' className='fw-bold fs-4'>
          Pizza App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' active' : '')
              }
            >
              Trang chủ
            </NavLink>

            <NavLink
              to='/register'
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' active' : '')
              }
            >
              Đăng ký
            </NavLink>

            <NavLink
              to='/news'
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' active' : '')
              }
            >
              News
            </NavLink>

            <NavLink
              to='/about'
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' active' : '')
              }
            >
              Giới thiệu
            </NavLink>

            <NavLink
              to='/contact'
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' active' : '')
              }
            >
              Liên hệ
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
