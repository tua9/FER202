import { useState, useEffect } from 'react'
import { Container, Form, Button, Card, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAccount } from '../contexts/AccountContext'
import accountService from '../services/accountService'
import MessageModal from '../components/MessageModal'

function LoginPage() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [loginError, setLoginError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [loggedUser, setLoggedUser] = useState(null)

  const { state, dispatch } = useAccount()
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect if already logged in
    if (state.currentUser) {
      navigate('/home')
      return
    }

    accountService.getAll().then((res) => {
      dispatch({ type: 'SET_ACCOUNTS', payload: res.data })
    })
  }, [dispatch, state.currentUser, navigate])

  const handleLogin = (e) => {
    e.preventDefault()
    setLoginError('')
    const newErrors = {}

    if (!usernameOrEmail.trim() && !password.trim()) {
      setLoginError('Username and password are required.')
      setErrors({ usernameOrEmail: true, password: true })
      return
    }

    if (!usernameOrEmail.trim()) {
      newErrors.usernameOrEmail = 'Username or Email is required.'
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required.'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      const firstError = Object.values(newErrors)[0]
      setLoginError(firstError)
      return
    }

    setErrors({})
    setLoginError('')

    const account = state.accounts.find(
      (acc) => acc.username === usernameOrEmail && acc.password === password,
    )

    if (!account) {
      setLoginError('Invalid username or password!')
      return
    }

    setLoggedUser(account)
    setModalMessage(`Welcome, ${account.fullName}! Login successful.`)
    setShowModal(true)
  }

  const handleContinue = () => {
    dispatch({ type: 'LOGIN', payload: loggedUser })
    setShowModal(false)
    navigate('/home')
  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ minHeight: '100vh' }}
    >
      <Card style={{ width: '450px' }} className='shadow'>
        <Card.Body>
          <h2 className='text-center mb-4'>Login</h2>
          {loginError && <Alert variant='danger'>{loginError}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group className='mb-3'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter username'
                value={usernameOrEmail}
                onChange={(e) => {
                  setUsernameOrEmail(e.target.value)
                  setErrors({ ...errors, usernameOrEmail: false })
                  setLoginError('')
                }}
                isInvalid={!!errors.usernameOrEmail}
              />
            </Form.Group>

            <Form.Group className='mb-4'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder=''
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setErrors({ ...errors, password: false })
                  setLoginError('')
                }}
                isInvalid={!!errors.password}
              />
              <Form.Text className='text-muted'>
                (at least 6 characters)
              </Form.Text>
            </Form.Group>

            <div className='d-grid'>
              <Button variant='primary' type='submit' className='py-2 fw-bold'>
                Login
              </Button>
            </div>
          </Form>
          <div className='text-center mt-3'>
            <p className='mb-0 small text-muted'>
              Don't have an account?{' '}
              <span
                style={{
                  color: 'blue',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
                onClick={() => navigate('/register')}
              >
                Sign up
              </span>
            </p>
          </div>
        </Card.Body>
      </Card>

      <MessageModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title='Login Success'
        message={modalMessage}
        onContinue={handleContinue}
      />
    </Container>
  )
}

export default LoginPage
