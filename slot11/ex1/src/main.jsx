// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Exercise1 from './pages/Exercise1.jsx'
import Exercise2 from './pages/Exercise2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          {/* Route mặc định khi vào / là Exercise1 */}
          <Route index element={<Exercise1 />} />

          <Route path='exercise1' element={<Exercise1 />} />
          <Route path='exercise2' element={<Exercise2 />} />

          {/* Optional: trang 404 nếu muốn */}
          <Route
            path='*'
            element={<h1 className='text-center mt-5'>404 - Không tìm thấy</h1>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
