// src/exercises/Exercise1.jsx  (hoặc src/components/Exercise1.jsx – tùy bạn đặt)
import CounterComponent from '../components/CounterComponent'
import LightSwitch from '../components/LightSwitch'

export default function Exercise1() {
  return (
    <>
      <h2 className='text-center mb-4'>
        Exercise 1: useReducer + useContext (Theme)
      </h2>
      <CounterComponent />
      <LightSwitch />
    </>
  )
}
