import { Link } from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function ArtworkNavbar () {
  return(
    <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="brand">Artlelo</Navbar.Brand>
          <Nav>
          <ul className="navList">
            <li className="listItem">
            <Link to="/" className="navLink">Home</Link>
            </li>
            <li>
              <Link to="/draw" className="navLink">Draw Art</Link>
            </li>
            <li>
              <Link to="/myart" className="navLink">My Art</Link>
            </li>
          </ul>
        </Nav>
        </Navbar>
      </header>
  )
}

export default ArtworkNavbar;