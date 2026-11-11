
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
return (
<nav className="navbar">
<h2>📚 Book Haven</h2>

<div className="nav-links">
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/books">Books</Link>
<Link to="/contact">Contact</Link>
<Link to="/cart">Cart ({cartCount})</Link>
</div>
</nav>
);
}

export default Navbar;

