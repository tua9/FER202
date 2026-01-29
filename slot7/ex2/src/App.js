import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import NavbarMenu from "./components/NavbarMenu"
import QuantityEditor from "./components/QualityEditor"
import ProcessOrder from "./components/ProcessOrder"
import ProductForm from "./components/ProductForm"
import TodoList from "./components/TodoList"

function App() {
  return (
    <BrowserRouter>
      <NavbarMenu />

      <Container
        fluid
        className="vh-100 d-flex justify-content-center align-items-center"
      >
        <Routes>
          <Route path="/" element={<QuantityEditor />} />
          <Route path="/exercise1" element={<QuantityEditor />} />
          <Route path="/exercise2" element={<ProcessOrder />} />
          <Route path="/exercise3" element={<ProductForm />} />
          <Route path="/exercise4" element={<TodoList />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
