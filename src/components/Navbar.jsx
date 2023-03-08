import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <Link to="/react-marketplace/products" className="nav--item">My products</Link>
            <Link to="/react-marketplace/newProduct" className="nav--item">Add product</Link>
        </nav>
    )
}

export default Navbar
