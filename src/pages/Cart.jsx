import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart }) {
const total = cart.reduce(
(sum, book) => sum + book.price,
0
);

return (
<div className="page">
<h1>Shopping Cart 🛒</h1>

{cart.length === 0 ? (
<div>
<p>Your cart is empty.</p>

<Link to="/books">
<button className="btn">
Browse Books
</button>
</Link>
</div>
) : (
<div>
{cart.map((book, index) => (
<div className="cart-item" key={index}>
<img
src={book.image}
alt={book.title}
width="80"
/>

<div>
<h3>{book.title}</h3>
<p>Author: {book.author}</p>
<p>Price: ${book.price.toFixed(2)}</p>
</div>

<button
className="btn"
onClick={() => removeFromCart(index)}
>
Remove
</button>
</div>
))}

<h2>Total Price: ${total.toFixed(2)}</h2>

<Link to="/order">
<button className="btn">
Proceed to Checkout
</button>
</Link>
</div>
)}
</div>
);
}

export default Cart;

