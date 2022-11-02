import { useState } from 'react'

import Nav from './components/Nav'
import Landing from './pages/Landing'

const App = () => {
  const [puppies, setPuppies] = useState([])

  return (
    <>
      <Nav />
      <Landing />
    </>
  )
}

export default App
