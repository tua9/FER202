import React, { useState } from 'react'
import { Button, Card, Form, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useTheme } from '../contexts/ThemeContext'

function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [validationError, setValidationError] = useState('')

  const { login, isLoading, error, isAuthenticated, user, logout } = useAuth()
  const { theme } = useTheme()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setValidationError('')

    if (!username.trim()) {
      setValidationError('Vui lòng nhập tên đăng nhập!')
      return
    }
    if (!password.trim()) {
      setValidationError('Vui lòng nhập mật khẩu!')
      return
    }

    const success = await login(username.trim(), password.trim())
    if (success) {
      setUsername('')
      setPassword('')
    }
  }

  if (isAuthenticated && user) {
    return (
      <Card
        className='mt-4'
        style={{
          background: theme === 'light' ? '#fff' : '#333',
          color: theme === 'light' ? '#000' : '#fff',
        }}
      >
        <Card.Body className='text-center'>
          <h3>🎉 Đăng nhập thành công!</h3>
          <p>
            <strong>Xin chào Admin:</strong> {user.username}
          </p>
          <p>Email: {user.email}</p>
          <Button variant='danger' onClick={logout}>
            Đăng xuất
          </Button>
        </Card.Body>
      </Card>
    )
  }

  return (
    <Card
      className='mt-4'
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      <Card.Header as='h5'>Đăng nhập (Chỉ Admin)</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Tên đăng nhập</Form.Label>
            <Form.Control
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='admin'
              disabled={isLoading}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='123456'
              disabled={isLoading}
            />
          </Form.Group>

          {validationError && (
            <Alert variant='warning'>{validationError}</Alert>
          )}
          {error && <Alert variant='danger'>{error}</Alert>}

          <Button
            variant='primary'
            type='submit'
            disabled={isLoading}
            className='w-100'
          >
            {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default LoginForm
