import { useState } from 'react'
import { Card, Button, Form } from 'react-bootstrap'

function QuantityEditor() {
  const [quantity, setQuantity] = useState(0)

  return (
    <Card className='p-3 shadow-sm' style={{ width: '300px' }}>
      <h5 className='mb-3'>Product Quantity</h5>

      <div className='d-flex align-items-center justify-content-between'>
        <Button
          variant='outline-danger'
          onClick={() => setQuantity((q) => Math.max(0, q - 1))}
        >
          −
        </Button>

        <Form.Control
          className='text-center mx-2'
          style={{ width: '80px' }}
          value={quantity}
          readOnly
        />

        <Button
          variant='outline-success'
          onClick={() => setQuantity((q) => q + 1)}
        >
          +
        </Button>
      </div>
    </Card>
  )
}

export default QuantityEditor
