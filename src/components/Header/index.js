import {Link} from "react-router-dom"

import "./index.css"


const Header =() =>(
  <nav className="nav-container">
    
      <ul className="nav-details">
        <li >
          <Link className="nav-item" to="/">Home</Link>
        </li>
        <li>
        <Link className="nav-item" to="/about">About</Link>
        </li>
        <li>
        <Link className="nav-item" to="/comments">Review</Link>
        </li>
      </ul>
   </nav>
 
)

export default Header