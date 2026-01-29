import { useState } from 'react'
import { Button, Modal, Card } from 'react-bootstrap'

function ProcessOrder() {
  const [isShowModal, setIsShowModal] = useState(false)

  const handleConfirm = () => {
    alert(
      'Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?',
    )
    setIsShowModal(false)
  }

  return (
    <>
      <Card className='p-4 shadow-sm' style={{ width: '350px' }}>
        <h5>Order Management</h5>
        <p className='text-muted mb-3'>Xử lý đơn hàng đang chờ</p>

        <Button variant='primary' onClick={() => setIsShowModal(true)}>
          Xử lý đơn hàng
        </Button>
      </Card>

      <Modal show={isShowModal} onHide={() => setIsShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xử lý</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho
          không?
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={() => setIsShowModal(false)}>
            Hủy
          </Button>
          <Button variant='success' onClick={handleConfirm}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProcessOrder
