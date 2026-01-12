//Khai báo 1 đối tượng student gồm id, name, avartar và grade
//In ra thông tin của student bằng h1, p và img
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function About({ id, name, avatar, grade, age }) {
  return (
    <Card
      style={{ width: '18rem', backgroundColor: '#95bee8ff' }}
      className='m-3'
    >
      <Card.Body>
        <Card.Img
          variant='top'
          src={avatar}
          alt={name}
          width={200}
          height={200}
        />
        <Card.Title>{name}</Card.Title>
        <Card.Text>ID: {id}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
        <Card.Text>Grade: {grade}</Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
