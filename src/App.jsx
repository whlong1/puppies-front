import { useState } from 'react'

import Nav from './components/Nav'
import Landing from './pages/Landing'

const App = (props) => {
  const [puppies, setPuppies] = useState([])
  
  return (
    <>
      <Nav />
      <Landing handleAddPuppy={handleAddPuppy}/>
    </>
  )
}

export default App
