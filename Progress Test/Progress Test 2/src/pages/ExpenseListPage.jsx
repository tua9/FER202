import { useState, useEffect, useMemo } from 'react'
import { Container, Table, Button, Form, Row, Col, Card } from 'react-bootstrap'
import { useAccount } from '../contexts/AccountContext'
import expenseService from '../services/expenseService'
import ToastMessage from '../components/ToastMessage'
import ConfirmModal from '../components/ConfirmModal'

function ExpenseListPage() {
  const { state } = useAccount()
  const { currentUser } = state
  const [expenses, setExpenses] = useState([])
  const [categoryFilter, setCategoryFilter] = useState('All')

  // Form state
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    amount: '',
    category: 'Food',
    date: new Date().toISOString().split('T')[0],
  })

  const [showConfirm, setShowConfirm] = useState(false)
  const [selectedExpense, setSelectedExpense] = useState(null)

  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastVariant, setToastVariant] = useState('success')

  useEffect(() => {
    expenseService.getAll().then((res) => {
      setExpenses(res.data)
    })
  }, [])

  // Optimized filtering
  const filteredExpenses = useMemo(() => {
    if (!currentUser) return []
    // Filter by BOTH userId and category
    return expenses.filter((ex) => {
      // Use loose comparison to handle string/number IDs
      const matchesUser = String(ex.userId) === String(currentUser.id)
      const matchesCategory =
        categoryFilter === 'All' || ex.category === categoryFilter
      return matchesUser && matchesCategory
    })
  }, [expenses, categoryFilter, currentUser])

  const totalAmount = useMemo(() => {
    return filteredExpenses.reduce(
      (sum, ex) => sum + (Number(ex.amount) || 0),
      0,
    )
  }, [filteredExpenses])

  const categories = useMemo(() => {
    const defaultCats = [
      'Food',
      'Utilities',
      'Entertainment',
      'Health',
      'Transport',
      'Mua sắm',
    ]
    const existingCats = Array.from(new Set(expenses.map((ex) => ex.category)))
    return ['All', ...Array.from(new Set([...defaultCats, ...existingCats]))]
  }, [expenses])

  const handleReset = () => {
    setFormData({
      id: null,
      name: '',
      amount: '',
      category: 'Food',
      date: new Date().toISOString().split('T')[0],
    })
  }

  const handleEdit = (expense) => {
    // Convert DD-MM-YYYY or any format to YYYY-MM-DD for input[type=date]
    let formattedDate = expense.date
    if (expense.date.includes('-')) {
      const parts = expense.date.split('-')
      if (parts[0].length === 4) {
        // Already YYYY-MM-DD (e.g., 2025-10-03)
        formattedDate = expense.date
      } else if (parts[2].length === 4) {
        // DD-MM-YYYY to YYYY-MM-DD (e.g., 06-03-2026 to 2026-03-06)
        formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`
      }
    }
    setFormData({
      ...expense,
      date: formattedDate,
    })
  }

  const handleSave = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.amount) return

    if (Number(formData.amount) <= 0) {
      setToastMessage('Expense amount must be greater than 0')
      setToastVariant('danger')
      setShowToast(true)
      return
    }

    try {
      // Format date for storage: DD-MM-YYYY (matching typical PE requirements)
      let displayDate = formData.date
      if (formData.date.includes('-')) {
        const parts = formData.date.split('-')
        if (parts[0].length === 4) {
          // YYYY-MM-DD to DD-MM-YYYY
          displayDate = `${parts[2]}-${parts[1]}-${parts[0]}`
        }
      }

      const payload = {
        userId: String(currentUser.id),
        name: formData.name,
        amount: Number(formData.amount),
        category: formData.category,
        date: displayDate,
      }

      if (formData.id) {
        await expenseService.update(formData.id, payload)
        setExpenses(
          expenses.map((ex) =>
            ex.id === formData.id ? { ...payload, id: formData.id } : ex,
          ),
        )
        setToastMessage('Expense updated successfully')
      } else {
        const res = await expenseService.create(payload)
        setExpenses([...expenses, res.data])
        setToastMessage('Expense added successfully')
      }

      handleReset()
      setToastVariant('success')
      setShowToast(true)
    } catch (err) {
      console.error('Save failed', err)
    }
  }

  const handleDelete = (expense) => {
    setSelectedExpense(expense)
    setShowConfirm(true)
  }

  const confirmDelete = async () => {
    if (!selectedExpense) return
    try {
      await expenseService.delete(selectedExpense.id)
      setExpenses(expenses.filter((ex) => ex.id !== selectedExpense.id))
      setShowConfirm(false)
      setToastMessage('Expense deleted successfully')
      setToastVariant('success')
      setShowToast(true)
    } catch (err) {
      console.error('Delete failed', err)
    }
  }

  const formatCurrency = (amount) => {
    return new Number(amount).toLocaleString('de-DE') + ' đ'
  }

  const formatDate = (dateStr) => {
    if (!dateStr || !dateStr.includes('-')) return dateStr
    const parts = dateStr.split('-')
    if (parts[0].length === 4) {
      // YYYY-MM-DD -> DD-MM-YYYY
      return `${parts[2]}-${parts[1]}-${parts[0]}`
    }
    return dateStr
  }

  return (
    <Container
      fluid
      style={{
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        paddingBottom: '80px',
      }}
    >
      <Container className='py-4'>
        {/* Top Row: Total and Filter */}
        <Row className='mb-4'>
          <Col md={4}>
            <Card className='h-100 shadow-sm border-0'>
              <Card.Body>
                <Card.Title className='text-muted small fw-bold text-uppercase'>
                  Total of Expenses
                </Card.Title>
                <h3 className='mb-0'>{formatCurrency(totalAmount)}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card className='h-100 shadow-sm border-0'>
              <Card.Body>
                <Card.Title className='text-muted small fw-bold text-uppercase'>
                  Filter
                </Card.Title>
                <Form.Group>
                  <Form.Label className='small text-muted'>Category</Form.Label>
                  <Form.Select
                    style={{ maxWidth: '300px' }}
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                  >
                    <option value='All'>All categories</option>
                    <option value='Food'>Food</option>
                    <option value='Utilities'>Utilities</option>
                    <option value='Entertainment'>Entertainment</option>
                    <option value='Mua sắm'>Mua sắm</option>
                  </Form.Select>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Main Content Row */}
        <Row>
          {/* Left: Input Form */}
          <Col md={4}>
            <Card className='shadow-sm border-0 mb-4'>
              <Card.Body>
                <Card.Title className='mb-4 fw-bold'>
                  {formData.id ? 'Edit Expense' : 'Add Expense'}
                </Card.Title>
                <Form onSubmit={handleSave}>
                  <Form.Group className='mb-3'>
                    <Form.Label className='small text-muted'>Name</Form.Label>
                    <Form.Control
                      type='text'
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder='e.g. Electricity Bill'
                    />
                  </Form.Group>

                  <Row className='mb-3'>
                    <Col>
                      <Form.Group>
                        <Form.Label className='small text-muted'>
                          Amount
                        </Form.Label>
                        <Form.Control
                          type='number'
                          min='1'
                          value={formData.amount}
                          onChange={(e) =>
                            setFormData({ ...formData, amount: e.target.value })
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label className='small text-muted'>
                          Category
                        </Form.Label>
                        <Form.Select
                          value={formData.category}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              category: e.target.value,
                            })
                          }
                        >
                          <option value='Food'>Food</option>
                          <option value='Utilities'>Utilities</option>
                          <option value='Entertainment'>Entertainment</option>
                          <option value='Mua sắm'>Mua sắm</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className='mb-4'>
                    <Form.Label className='small text-muted'>Date</Form.Label>
                    <Form.Control
                      type='date'
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                    />
                  </Form.Group>

                  <div className='d-flex justify-content-end gap-2'>
                    <Button variant='secondary' onClick={handleReset}>
                      Reset
                    </Button>
                    <Button variant='primary' type='submit'>
                      Save
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Right: Table */}
          <Col md={8}>
            <Card className='shadow-sm border-0'>
              <Card.Body>
                <Card.Title className='mb-4 fw-bold'>
                  Expense Management
                </Card.Title>
                <Table hover responsive className='align-middle'>
                  <thead className='bg-light'>
                    <tr>
                      <th className='border-0'>Name</th>
                      <th className='border-0'>Amount</th>
                      <th className='border-0'>Category</th>
                      <th className='border-0'>Date</th>
                      <th className='border-0'></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredExpenses.map((ex) => (
                      <tr key={ex.id}>
                        <td>{ex.name}</td>
                        <td>{formatCurrency(ex.amount)}</td>
                        <td>{ex.category}</td>
                        <td>{formatDate(ex.date)}</td>
                        <td>
                          <div className='d-flex gap-2'>
                            <Button
                              variant='warning'
                              size='sm'
                              onClick={() => handleEdit(ex)}
                            >
                              Edit
                            </Button>
                            <Button
                              variant='danger'
                              size='sm'
                              onClick={() => handleDelete(ex)}
                            >
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className='fixed-bottom bg-white border-top py-3'>
        <Container className='d-flex justify-content-between align-items-center small text-muted'>
          <div>© 2025 PersonalBudget Demo</div>
          <div>Built with React, useReducer & JSON Server</div>
        </Container>
      </footer>

      <ConfirmModal
        show={showConfirm}
        onHide={() => setShowConfirm(false)}
        title='Confirm Delete'
        message={`Are you sure you want to delete "${selectedExpense?.name}"?`}
        onConfirm={confirmDelete}
      />

      <ToastMessage
        show={showToast}
        onClose={() => setShowToast(false)}
        message={toastMessage}
        variant={toastVariant}
      />
    </Container>
  )
}

export default ExpenseListPage
