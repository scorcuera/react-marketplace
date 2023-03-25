import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <Link to="/products" className="nav--item">My products</Link>
            <Link to="/newProduct" className="nav--item">Add product</Link>
            <Link to="/cart" className="nav--item">Cart</Link>
        </nav>
    )
}

export default Navbar
