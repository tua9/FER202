// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import ManageUsers from '../components/ManageUsers'

// Protected Route wrapper (dùng Outlet để render children nếu đã login)
const ProtectedRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to='/login' replace />
}

const AppRoutes = ({ isLoggedIn, onLoginSuccess }) => {
  return (
    <Routes>
      <Route
        path='/login'
        element={<LoginForm onLoginSuccess={onLoginSuccess} />}
      />

      <Route
        path='/manage-users'
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <ManageUsers />
          </ProtectedRoute>
        }
      />

      <Route path='/' element={<Navigate to='/login' replace />} />

      <Route path='*' element={<h2>404 - Trang không tồn tại</h2>} />
    </Routes>
  )
}

export default AppRoutes
