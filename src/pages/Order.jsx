import { useState } from "react";
import { Link } from "react-router-dom";

function Order({ cart, clearCart }) {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
const [phone, setPhone] = useState("");
const [success, setSuccess] = useState(false);

const total = cart.reduce(
(sum, book) => sum + book.price,
0
);

function handleSubmit(e) {
e.preventDefault();

if (cart.length === 0) return;

setSuccess(true);
clearCart();

setName("");
setEmail("");
setAddress("");
setPhone("");
}

return (
<div className="page">
<h1>Checkout 📦</h1>

{success ? (
<div>
<h2>Order Placed Successfully! ✅</h2>
<p>Thank you for shopping at Book Haven!</p>
<p>This is a demo order.</p>

<Link to="/books">
<button className="btn">
Continue Shopping
</button>
</Link>
</div>
) : cart.length === 0 ? (
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
<h2>Order Summary</h2>

{cart.map((book, index) => (
<div key={index}>
<p>
{book.title} - ${book.price.toFixed(2)}
</p>
</div>
))}

<h3>Total: ${total.toFixed(2)}</h3>

<h2>Delivery Information</h2>

<form
className="contact-form"
onSubmit={handleSubmit}
>
<label>Full Name</label>
<input
type="text"
placeholder="Enter your full name"
value={name}
onChange={(e) => setName(e.target.value)}
required
/>

<label>Email</label>
<input
type="email"
placeholder="Enter your email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>

<label>Phone Number</label>
<input
type="tel"
placeholder="Enter your phone number"
value={phone}
onChange={(e) => setPhone(e.target.value)}
required
/>

<label>Delivery Address</label>
<textarea
placeholder="Enter your delivery address"
value={address}
onChange={(e) => setAddress(e.target.value)}
required
/>

<button className="btn" type="submit">
Place Order
</button>
</form>
</div>
)}
</div>
);
}

export default Order;

