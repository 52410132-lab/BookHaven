import { Link } from "react-router-dom";

function Home() {
return (
<div className="home">
<section className="hero">
<h1>Welcome to Book Haven 📚</h1>
<p>Discover your next favorite book with us!</p>
<p>
Explore amazing stories, learn new things,
and enjoy reading.
</p>

<Link to="/books">
<button className="btn">Shop Now</button>
</Link>
</section>

<section className="home-features">
<h2>Why Choose Book Haven?</h2>

<div className="features">
<div className="feature-card">
<h3>📖 Wide Collection</h3>
<p>Find books from different categories.</p>
</div>

<div className="feature-card">
<h3>💰 Great Prices</h3>
<p>Enjoy affordable prices on books.</p>
</div>

<div className="feature-card">
<h3>🛒 Easy Shopping</h3>
<p>Browse, search, and order easily.</p>
</div>
</div>
</section>
</div>
);
}

export default Home;

