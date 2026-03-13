import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

//kiểm tra xem người dùng đã đăng nhập chưa, nếu chưa chuyển hướng đến trang đăng nhập
function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to='/login' />
  }
  return children
}

export default ProtectedRoute
