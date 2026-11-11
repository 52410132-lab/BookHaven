import { useState } from "react";

const books = [
{
id: 1,
title: "The Great Gatsby",
author: "F. Scott Fitzgerald",
category: "Fiction",
price: 12,
image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg"
},
{
id: 2,
title: "Pride and Prejudice",
author: "Jane Austen",
category: "Romance",
price: 15,
image: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg"
},
{
id: 3,
title: "Atomic Habits",
author: "James Clear",
category: "Self Development",
price: 20,
image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
},
{
id: 4,
title: "A Brief History of Time",
author: "Stephen Hawking",
category: "Science",
price: 18,
image: "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg"
},
{
id: 5,
title: "Clean Code",
author: "Robert C. Martin",
category: "Technology",
price: 30,
image: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg"
},
{
id: 6,
title: "The Alchemist",
author: "Paulo Coelho",
category: "Fiction",
price: 14,
image: "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg"
}
];

function Books({ addToCart }) {
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");

const filteredBooks = books.filter((book) => {
const matchesSearch =
book.title.toLowerCase().includes(search.toLowerCase()) ||
book.author.toLowerCase().includes(search.toLowerCase());

const matchesCategory =
category === "All" || book.category === category;

return matchesSearch && matchesCategory;
});

return (
<div className="page">
<h1>Explore Our Books 📚</h1>
<p>Find your next favorite book!</p>

<div className="filters">
<input
type="text"
placeholder="Search by title or author..."
value={search}
onChange={(e) => setSearch(e.target.value)}
/>

<select
value={category}
onChange={(e) => setCategory(e.target.value)}
>
<option value="All">All Categories</option>
<option value="Fiction">Fiction</option>
<option value="Romance">Romance</option>
<option value="Science">Science</option>
<option value="Technology">Technology</option>
<option value="Self Development">
Self Development
</option>
</select>
</div>

<div className="books-grid">
{filteredBooks.length > 0 ? (
filteredBooks.map((book) => (
<div className="book-card" key={book.id}>
<img src={book.image} alt={book.title} />

<h3>{book.title}</h3>
<p>Author: {book.author}</p>
<p>Category: {book.category}</p>
<h3>${book.price.toFixed(2)}</h3>

<button
className="btn"
onClick={() => addToCart(book)}
>
Add to Cart
</button>
</div>
))
) : (
<p>No books found.</p>
)}
</div>
</div>
);
}

export default Books;

