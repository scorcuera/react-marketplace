import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    return (
        <nav className="bg-gray-800 shadow-inner">
            <Link to="/products" className="text-slate-50 text-lg font-light">My products</Link>
            <Link to="/newProduct" className="text-slate-50 text-lg">Add product</Link>
        </nav>
    )
}

export default Navbar
