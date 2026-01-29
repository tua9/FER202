import { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'

function ProductForm() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    alert(
      `Product: ${form.name}\nPrice: ${form.price}\nCategory: ${form.category}`,
    )
  }

  return (
    <Card className='p-4 shadow-sm' style={{ width: '350px' }}>
      <h5 className='mb-3'>Add Product</h5>

      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>Tên sản phẩm</Form.Label>
          <Form.Control name='name' value={form.name} onChange={handleChange} />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Giá</Form.Label>
          <Form.Control
            name='price'
            type='number'
            value={form.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Danh mục</Form.Label>
          <Form.Control
            name='category'
            value={form.category}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant='success' onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Card>
  )
}

export default ProductForm
