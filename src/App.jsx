import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Nav from './components/Nav'
import Landing from './pages/Landing'
import NewPuppy from './pages/NewPuppy'
import PuppyList from './pages/PuppyList'

// Services
import * as puppyService from './services/puppyService'

const App = () => {
  const [puppies, setPuppies] = useState()

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