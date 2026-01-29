import { useState } from 'react'
import {
  Card,
  Form,
  Button,
  ListGroup,
  Row,
  Col,
  InputGroup,
} from 'react-bootstrap'

function TodoList() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (!task.trim()) return
    setTodos([...todos, task])
    setTask('')
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <Row
      className='vh-100 
    bg-dark'
    >
      <Col md={7} lg={6} className='d-flex align-items-center gap-4'>
        {/* Input */}
        <Card className='p-4 shadow' style={{ minWidth: '320px' }}>
          <h5 className='mb-3'>Add New Task</h5>

          <InputGroup>
            <Form.Control
              placeholder='Please input a task'
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addTodo()}
            />
            <Button variant='danger' onClick={addTodo}>
              Add
            </Button>
          </InputGroup>
        </Card>

        {/* Todo List */}
        <Card className='p-4 shadow' style={{ minWidth: '320px' }}>
          <h5 className='text-center mb-3'>Todo List</h5>

          {todos.length === 0 ? (
            <p className='text-muted text-center'>No tasks yet 🚀</p>
          ) : (
            <ListGroup variant='flush'>
              {todos.map((todo, index) => (
                <ListGroup.Item
                  key={index}
                  className='d-flex justify-content-between align-items-center'
                >
                  <span>{todo}</span>
                  <Button
                    variant='outline-danger'
                    size='sm'
                    onClick={() => deleteTodo(index)}
                  >
                    Delete
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Card>
      </Col>
    </Row>
  )
}

export default TodoList
