import { NavLink } from "react-router-dom"
import Logo from '../assets/logo.svg'

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">
        <img src={Logo} alt="A cute puppy" />
      </NavLink>
      <NavLink to="/puppies">Puppy List</NavLink>
      <NavLink to="/puppies/new">New Puppy</NavLink>
    </nav>
  )
}

export default Nav