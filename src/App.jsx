import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Nav from './components/Nav'
import Landing from './pages/Landing'
import NewPuppy from './pages/NewPuppy'
import PuppyList from './pages/PuppyList'

const App = (props) => {
  const [puppies, setPuppies] = useState([])

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/puppies' element={<PuppyList />} />
        <Route path='/puppies/new' element={<NewPuppy />} />
      </Routes>
    </>
  )
}

export default App