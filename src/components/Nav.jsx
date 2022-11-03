import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <NavLink to="/puppies">Puppy List</NavLink>
      <NavLink to="/puppies/new">New Puppy</NavLink>
    </nav>
  )
}

export default Nav