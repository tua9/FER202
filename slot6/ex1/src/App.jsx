// src/App.jsx
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRoutes from './routes/AppRoutes'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
    // Có thể lưu token vào localStorage nếu dùng auth thật
    // localStorage.setItem('isLoggedIn', 'true');
  }

  return (
    <BrowserRouter>
      <AppRoutes isLoggedIn={isLoggedIn} onLoginSuccess={handleLoginSuccess} />
    </BrowserRouter>
  )
}

export default App
