import { NavLink } from "react-router-dom"  

function Navigation() {
  return (
    <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
    </nav>
  )
}

export default Navigation