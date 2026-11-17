import { useState } from "react";

const books = [
{
id: 1, // first book 
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
const [category, setCategory] = useState("All");//all books not one specific 

const filteredBooks = books.filter((book) => {//new array contain book that match condition in search 
 // if the word in search is in the title of the book 
    const matchesSearch =
book.title.toLowerCase().includes(search.toLowerCase()) ||//match hsb cap or lower 
book.author.toLowerCase().includes(search.toLowerCase());

const matchesCategory =
category === "All" || book.category === category;//if the book matches category
//all=all categories 
return matchesSearch && matchesCategory;
});//if true show the book 

return (
<div className="page">
<h1>Explore Our Books 📚</h1>
<p>Find your next favorite book!</p>

<div className="filters">{/*search for book title or type*/}
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
    {/*css class form of cart*/}
 {/*nb of books>0 show book or no books found*/}
 {/*see every book and do book cart price */}
{filteredBooks.length > 0 ? (    
filteredBooks.map((book) => (    
<div className="book-card" key={book.id}>
     {/*css give id for every book */}
<img src={book.image} alt={book.title} />
 {/*image for the book*/}

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

