import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// Components
import Nav from './components/Nav'
import Landing from './pages/Landing/Landing'
import NewPuppy from './pages/NewPuppy/NewPuppy'
import PuppyList from './pages/PuppyList/PuppyList'

// Services
import * as puppyService from './services/puppyService'

const App = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState(0)
  const [puppies, setPuppies] = useState([])

  const handleAddPuppy = async (data) => {
    const newPuppy = await puppyService.create(data)
    setPuppies([newPuppy, ...puppies])
    navigate('/puppies')
  }

  const handleRemovePuppy = async (id) => {
    const removedPuppy = await puppyService.delete(id)
    setPuppies(puppies.filter((p) => p._id !== removedPuppy._id))
  }

  useEffect(() => {
    const fetchPuppies = async () => {
      const data = await puppyService.index(page)
      setPuppies(data)
    }
    fetchPuppies()
  }, [])

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/puppies' element={<PuppyList puppies={puppies} handleRemovePuppy={handleRemovePuppy} />} />
        <Route path='/puppies/new' element={<NewPuppy handleAddPuppy={handleAddPuppy} />} />
      </Routes>
    </>
  )
}

export default App