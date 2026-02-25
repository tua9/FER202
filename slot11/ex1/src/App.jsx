// src/App.jsx
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
          <Navbar />

          <div className='container py-4'>
            <Outlet /> {/* Nơi render các route con */}
          </div>
        </div>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
