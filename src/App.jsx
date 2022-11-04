import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Nav from './components/Nav'
import Landing from './pages/Landing'
import NewPuppy from './pages/NewPuppy'
import PuppyList from './pages/PuppyList'

const puppyArr = [
  { color: 'black', ears: 'bat', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'black', ears: 'drop', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'black', ears: 'button', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'brown', ears: 'bat', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'brown', ears: 'drop', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'brown', ears: 'button', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'grey', ears: 'bat', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'grey', ears: 'drop', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'grey', ears: 'button', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'white', ears: 'bat', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'white', ears: 'drop', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'white', ears: 'button', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'golden', ears: 'bat', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'golden', ears: 'drop', name: 'Rover', breed: 'Lab', age: 5 },
  { color: 'golden', ears: 'button', name: 'Rover', breed: 'Lab', age: 5 },
]

const App = () => {
  const [puppies, setPuppies] = useState(puppyArr)

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