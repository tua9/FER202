import { useParams } from 'react-router-dom'
import PizzaList from '../data/PizzaList'

function PizzaDetail() {
  const { id } = useParams()

  const pizza = PizzaList.find((p) => p.id === parseInt(id))

  return (
    <div className='container mt-3'>
      <h2>Pizza Detail</h2>
      <p>Pizza ID: {id}</p>
      {pizza && (
        <div>
          <p>Name: {pizza.name}</p>
          <p>Old Price: {pizza.oldPrice}</p>
          <p>Price: {pizza.price}</p>
          <img src={pizza.src} alt={pizza.name} style={{ width: '200px' }} />
          <p>Description: {pizza.description}</p>
        </div>
      )}
    </div>
  )
}

export default PizzaDetail
