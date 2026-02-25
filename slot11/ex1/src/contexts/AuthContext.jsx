import React, { createContext, useReducer, useContext } from 'react'

const mockAccounts = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    password: '123456',
    role: 'admin',
    status: 'active',
  },
  {
    id: 2,
    username: 'user1',
    email: 'user1@example.com',
    password: '123456',
    role: 'user',
    status: 'active',
  },
  {
    id: 3,
    username: 'user2',
    email: 'user2@example.com',
    password: '123456',
    role: 'user',
    status: 'locked',
  },
]

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
}

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true, error: null }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      }
    case 'LOGIN_FAIL':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      }
    case 'LOGOUT':
      return { ...initialState }
    default:
      return state
  }
}

export const AuthContext = createContext(undefined)

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const login = async (username, password) => {
    dispatch({ type: 'LOGIN_START' })

    await new Promise((resolve) => setTimeout(resolve, 800)) // giả lập delay

    const foundUser = mockAccounts.find(
      (acc) => acc.username === username && acc.password === password,
    )

    if (!foundUser) {
      dispatch({
        type: 'LOGIN_FAIL',
        payload: 'Sai tên đăng nhập hoặc mật khẩu!',
      })
      return false
    }

    if (foundUser.role !== 'admin') {
      dispatch({
        type: 'LOGIN_FAIL',
        payload: 'Chỉ tài khoản Admin mới được phép đăng nhập!',
      })
      return false
    }

    if (foundUser.status === 'locked') {
      dispatch({ type: 'LOGIN_FAIL', payload: 'Tài khoản đã bị khóa!' })
      return false
    }

    dispatch({ type: 'LOGIN_SUCCESS', payload: foundUser })
    return true
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  const value = { ...state, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth phải được dùng bên trong AuthProvider')
  }
  return context
}
