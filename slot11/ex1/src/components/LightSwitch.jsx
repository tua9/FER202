import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap'
import { useTheme } from '../contexts/ThemeContext'

const initialState = { isOn: false }

function reducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return { isOn: !state.isOn }
    case 'turnOn':
      return { isOn: true }
    case 'turnOff':
      return { isOn: false }
    default:
      return state
  }
}

function LightSwitch() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { theme, toggleTheme } = useTheme()

  const buttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
  }

  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid #ccc',
        marginBottom: '20px',
        background: theme === 'light' ? '#fff' : '#222',
        color: theme === 'light' ? '#000' : '#fff',
        transition: 'all 0.3s',
      }}
    >
      <h2>Công Tắc Đèn</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Đèn hiện đang: {state.isOn ? 'Bật' : 'Tắt'}
      </p>

      <Button
        style={{
          ...buttonStyle,
          background: theme === 'light' ? '#6c757d' : '#f8f9fa',
          color: theme === 'light' ? '#ffffff' : '#000000',
        }}
        onClick={toggleTheme}
      >
        {theme === 'light' ? 'Dark' : 'Light'}
      </Button>

      <Button
        style={{ ...buttonStyle, background: '#007bff', color: 'white' }}
        onClick={() => dispatch({ type: 'toggle' })}
      >
        Chuyển Đổi
      </Button>
      <Button
        style={{ ...buttonStyle, background: '#28a745', color: 'white' }}
        onClick={() => dispatch({ type: 'turnOn' })}
      >
        Bật Đèn
      </Button>
      <Button
        style={{ ...buttonStyle, background: '#dc3545', color: 'white' }}
        onClick={() => dispatch({ type: 'turnOff' })}
      >
        Tắt Đèn
      </Button>
    </div>
  )
}

export default LightSwitch
