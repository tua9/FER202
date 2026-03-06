// src/components/ProtectedLayout.jsx
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { useAccount } from '../contexts/AccountContext'

function ProtectedLayout() {
  const { state } = useAccount()
  const { currentUser } = state

  // Nếu chưa đăng nhập → chuyển về trang login
  if (!currentUser) {
    return <Navigate to='/' replace />
  }

  return (
    <>
      <Navbar />
      <Outlet /> {/* Các route con sẽ render ở đây */}
    </>
  )
}

export default ProtectedLayout
