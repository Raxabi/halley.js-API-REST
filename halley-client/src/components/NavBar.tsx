import { Fragment } from "react"
import { 
    BrowserRouter as Router,
    Link
} from "react-router-dom"

export const NavBar = () => {
  return (
    <Fragment>
      <Router>
        <nav id="navbar">
          <ul>
            <li>
              <Link to={"/add"}>Añadir nueva tarjeta</Link>
            </li>
          </ul>
        </nav>
      </Router>
    </Fragment>
  )
}

export default NavBar