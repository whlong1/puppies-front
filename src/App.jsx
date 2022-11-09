import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Nav from './components/Nav'
import Landing from './pages/Landing'
import NewPuppy from './pages/NewPuppy'
import PuppyList from './pages/PuppyList'

// Services
import * as puppyService from './services/puppyService'

const puppyArr = [
  { color: 'Black', ears: 'Bat', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'Black', ears: 'Drop', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'Black', ears: 'Button', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'Brown', ears: 'Bat', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'Brown', ears: 'Drop', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'Brown', ears: 'Button', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'Grey', ears: 'Bat', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'Grey', ears: 'Drop', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'Grey', ears: 'Button', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'White', ears: 'Bat', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'White', ears: 'Drop', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'White', ears: 'Button', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'Golden', ears: 'Drop', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'Golden', ears: 'Bat', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'Golden', ears: 'Button', name: 'Rover', breed: 'Lab', age: 5 },
]

const App = () => {
  const [puppies, setPuppies] = useState(puppyArr)

  useEffect(() => {
    const fetchPuppies = async () => {
      const data = await puppyService.index()
      console.log(data)
    }
    fetchPuppies()
  }, [])

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/puppies' element={<PuppyList puppies={puppies} />} />
        <Route path='/puppies/new' element={<NewPuppy />} />
      </Routes>
    </>
  )
}

export default App